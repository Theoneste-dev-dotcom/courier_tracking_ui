
import React, { useEffect, useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Shipment } from "@/types/shipment";
import { useToast } from "@/hooks/user-toast";
import { Package, Plus, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { getClientShipments } from "@/services/shipmentService";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const Shipments = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { toast } = useToast();
  
  useEffect(() => {
    const loadShipments = async () => {
      try {
        setLoading(true);
        // In a real app, you'd get the client ID from authentication context
        const clientId = 1; 
        const data = await getClientShipments(clientId);
        setShipments(data);
        
        toast({
          title: "Shipments loaded",
          description: `${data.length} shipments found`,
        });
      } catch (error) {
        console.error("Failed to load shipments:", error);
        toast({
          variant: "destructive",
          title: "Error loading shipments",
          description: "Please try again later",
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadShipments();
  }, [toast]);
  
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShipments = shipments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(shipments.length / itemsPerPage);
  
  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in transit':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header area */}
      <div className="bg-teal-600 dark:bg-teal-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">My Shipments</h1>
          <p className="text-white/80">Track and manage all your shipments</p>
        </div>
      </div>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Package size={24} className="text-teal-600" />
            All Shipments
          </h2>
          <Link href="/shipments/add">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus size={16} />
              Request New Shipment
            </Button>
          </Link>
        </div>
        
        {loading ? (
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </CardContent>
          </Card>
        ) : shipments.length > 0 ? (
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Tracking #</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentShipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-medium">{shipment.id}</TableCell>
                      <TableCell>{shipment.name}</TableCell>
                      <TableCell>{shipment.companyDetails?.name || 'N/A'}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(shipment.status)}`}>
                          {shipment.status}
                        </span>
                      </TableCell>
                      <TableCell>{format(new Date(shipment.createdAt), 'MMM dd, yyyy')}</TableCell>
                      <TableCell>{shipment.trackingNumber || 'N/A'}</TableCell>
                      <TableCell className="text-right">
                        <Link href={`/shipments/${shipment.id}`}>
                          <Button variant="ghost" size="sm" className="hover:bg-teal-50 hover:text-teal-600">
                            <ArrowRight size={16} />
                            View
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ) : (
          <Card className="border border-dashed border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <Package size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No Shipments Found</h3>
              <p className="text-muted-foreground mb-6">You haven't created any shipments yet.</p>
              <Link href="/add-shipment">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Plus size={16} />
                  Request New Shipment
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
        
        {/* Pagination */}
        {!loading && shipments.length > itemsPerPage && (
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {pageNumbers.map(number => (
                  <PaginationItem key={number}>
                    <PaginationLink 
                      onClick={() => handlePageChange(number)}
                      isActive={currentPage === number}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shipments;