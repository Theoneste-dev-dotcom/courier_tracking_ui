
import React, { useEffect, useState } from "react";
import { Shipment, ShipmentUpdate, ShipmentLog } from "@/types/shipment";
import { getShipment, getShipmentUpdates, getShipmentLogs } from "@/services/shipmentService";
import ShipmentTimeline from "@/components/ShipmentTimeline";
import ShipmentDetails from "@/components/ShipmentDetails";
import DeliveryProgress from "@/components/DeliveryProgress";
import ShipmentLogs from "@/components/ShipmentLogs";
import CompanyBanner from "@/components/CompanyBanner";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Package } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface StatusProps {
  shipmentId: number
}
const ShipmentStatus:React.FC<StatusProps> = ({shipmentId}) => {
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [shipmentUpdates, setShipmentUpdates] = useState<ShipmentUpdate[]>([]);
  const [shipmentLogs, setShipmentLogs] = useState<ShipmentLog[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const loadShipmentData = async () => {
      try {
        // In a real app, you'd get the shipment ID from the URL or user context
        const shipmentId = 123456;
        const shipmentData = await getShipment(shipmentId);
        const updatesData = await getShipmentUpdates(shipmentId);
        const logsData = await getShipmentLogs(shipmentId);
        
        setShipment(shipmentData);
        setShipmentUpdates(updatesData);
        setShipmentLogs(logsData);
        
        toast({
          title: "Welcome back!",
          description: `Your shipment status: ${shipmentData.status}`,
        });
      } catch (error) {
        toast({
          title: "Error loading shipment data",
          description: "Please try again later",
          variant: "destructive"
        });
        console.error("Failed to load shipment data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadShipmentData();
  }, [toast]);
  
  const handleRefresh = async () => {
    setLoading(true);
    try {
      const shipmentId = shipment?.id || 123456;
      const shipmentData = await getShipment(shipmentId);
      const updatesData = await getShipmentUpdates(shipmentId);
      const logsData = await getShipmentLogs(shipmentId);
      
      setShipment(shipmentData);
      setShipmentUpdates(updatesData);
      setShipmentLogs(logsData);
      
      toast({
        title: "Shipment data refreshed",
        description: `Current status: ${shipmentData.status}`,
      });
    } catch (error) {
      toast({
        title: "Error refreshing data",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Welcome message */}
      <div className="bg-teal-600 dark:bg-teal-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">Welcome, {shipment?.receiverDetails?.name || "Client"}</h1>
          <p className="text-white/80">Here's the latest status of your shipment</p>
        </div>
      </div>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="space-y-6">
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-[400px] w-full" />
          </div>
        ) : shipment ? (
          <div className="space-y-8">
            {/* Company banner if available */}
            {shipment.companyDetails && (
              <CompanyBanner companyDetails={shipment.companyDetails} />
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column - Shipment details */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border border-border overflow-hidden">
                  <div className="bg-teal-600 dark:bg-teal-800 text-white p-4">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      <h2 className="text-xl font-semibold ">{shipment.name}</h2>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <DeliveryProgress shipment={shipment} updates={shipmentUpdates} />
                    <ShipmentDetails shipment={shipment} />
                    <div className="mt-6">
                      <Button 
                        onClick={handleRefresh} 
                        className="w-full bg-teal-600 hover:bg-teal-700 "
                        disabled={loading}
                      >
                        Refresh Tracking Info
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right column - Timeline and Logs */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <Card className="border border-border">
                    <CardContent className="p-6">
                      <ShipmentTimeline 
                        updates={shipmentUpdates} 
                        currentStatus={shipment.status} 
                      />
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-border">
                    <CardContent className="p-6">
                      <ShipmentLogs logs={shipmentLogs} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="mt-4 text-xl font-semibold">No shipment found</h2>
            <p className="mt-2 text-muted-foreground">Please check your tracking number and try again</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-6 bg-teal-600 hover:bg-teal-700 text-white"
            >
              Try Again
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShipmentStatus;