import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
  } from "@/components/ui/table";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { ArrowRight } from "lucide-react";
  import { Button } from "@/components/ui/Button";
  import { useState } from "react";
  import { 
    Pagination, 
    PaginationContent, 
    PaginationItem, 
    PaginationLink, 
    PaginationNext, 
    PaginationPrevious 
  } from "@/components/ui/pagination";
  
  // Sample shipment data - in a real app, this would come from an API
  const shipments = [
    {
      id: "SH-7832",
      company: "FastTransit Logistics",
      trackingNumber: "TRK-38291",
      origin: "New York, NY",
      destination: "Los Angeles, CA",
      status: "In Transit",
      expectedDelivery: "2024-05-02",
    },
    {
      id: "SH-7833",
      company: "Global Express",
      trackingNumber: "TRK-38292",
      origin: "Chicago, IL",
      destination: "Miami, FL",
      status: "Processing",
      expectedDelivery: "2024-05-04",
    },
    {
      id: "SH-7834",
      company: "QuickShip Services",
      trackingNumber: "TRK-38293",
      origin: "Seattle, WA",
      destination: "Denver, CO",
      status: "Delayed",
      expectedDelivery: "2024-05-01",
    },
    {
      id: "SH-7835",
      company: "FastTransit Logistics",
      trackingNumber: "TRK-38294",
      origin: "Boston, MA",
      destination: "Houston, TX",
      status: "In Transit",
      expectedDelivery: "2024-05-03",
    },
    {
      id: "SH-7836",
      company: "Global Express",
      trackingNumber: "TRK-38295",
      origin: "Atlanta, GA",
      destination: "Phoenix, AZ",
      status: "Processing",
      expectedDelivery: "2024-05-05",
    },
    {
      id: "SH-7837",
      company: "QuickShip Services",
      trackingNumber: "TRK-38296",
      origin: "New York, NY",
      destination: "Chicago, IL",
      status: "Delivered",
      expectedDelivery: "2024-04-28",
    },
    {
      id: "SH-7838",
      company: "FastTransit Logistics",
      trackingNumber: "TRK-38297",
      origin: "San Francisco, CA",
      destination: "Austin, TX",
      status: "Delivered",
      expectedDelivery: "2024-04-27",
    },
  ];
  
  export function ClientShipmentHistory() {
    const [currentPage, setCurrentPage] = useState(1);
    const shipmentsPerPage = 5;
  
    // Get current shipments
    const indexOfLastShipment = currentPage * shipmentsPerPage;
    const indexOfFirstShipment = indexOfLastShipment - shipmentsPerPage;
    const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);
    
    // Calculate page numbers
    const totalPages = Math.ceil(shipments.length / shipmentsPerPage);
    
    const getStatusColor = (status: string) => {
      switch (status) {
        case "In Transit":
          return "bg-blue-100 text-blue-700";
        case "Processing":
          return "bg-amber-100 text-amber-700";
        case "Delayed":
          return "bg-red-100 text-red-700";
        case "Delivered":
          return "bg-green-100 text-green-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    };
  
    return (
      <Card className="animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Shipment History</CardTitle>
            <CardDescription>Track all your shipments across different companies</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="flex items-center">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Tracking #</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expected Delivery</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentShipments.map((shipment) => (
                <TableRow key={shipment.id} className="hover:bg-muted/50 cursor-pointer">
                  <TableCell className="font-medium">{shipment.id}</TableCell>
                  <TableCell>{shipment.company}</TableCell>
                  <TableCell>{shipment.trackingNumber}</TableCell>
                  <TableCell>{shipment.origin}</TableCell>
                  <TableCell>{shipment.destination}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(shipment.status)} variant="outline">
                      {shipment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{shipment.expectedDelivery}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {totalPages > 1 && (
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => setCurrentPage(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </CardContent>
      </Card>
    );
  }
  