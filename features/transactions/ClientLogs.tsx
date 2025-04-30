import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";
import { ClientMetrics } from "@/features/dashboard/client-dashboard/ClientMetrics";
import { ClientShipmentStatus } from "@/features/dashboard/client-dashboard/ClientShipmentStatus";
import { ClientCompanies } from "@/features/dashboard/client-dashboard/ClientCompanies";
import { ClientShipmentHistory } from "@/features/dashboard/client-dashboard/ClientShipmentHistory";
import { ClientRequests } from "@/features/dashboard/client-dashboard/ClientRequests";

const ClientDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Client Dashboard</h1>
        <p className="text-muted-foreground">Monitor your shipments and manage your requests</p>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="shipments">Shipments</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
          </TabsList>
          
          <div className="flex w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-9 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <ClientMetrics />
          <div className="grid grid-cols-4 gap-4">
            <ClientShipmentStatus />
            <ClientRequests showSummary={true} />
          </div>
          <ClientShipmentHistory />
        </TabsContent>

        <TabsContent value="shipments" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Shipments</h2>
            <Button variant="outline">Export Data</Button>
          </div>
          <ClientShipmentHistory />
        </TabsContent>

        <TabsContent value="companies" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Companies</h2>
            <Button variant="outline">Export Data</Button>
          </div>
          <ClientCompanies />
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Requests</h2>
            <Button variant="outline">Export Data</Button>
          </div>
          <ClientRequests showSummary={false} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientDashboard;
