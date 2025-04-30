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
  
  // Sample shipment data - in a real app, this would come from an API
  const shipments = [
    {
      id: "SH-7832",
      client: "Acme Corp",
      trackingNumber: "TRK-38291",
      origin: "New York, NY",
      destination: "Los Angeles, CA",
      status: "In Transit",
      expectedDelivery: "2024-05-02",
    },
    {
      id: "SH-7833",
      client: "Tech Solutions",
      trackingNumber: "TRK-38292",
      origin: "Chicago, IL",
      destination: "Miami, FL",
      status: "Processing",
      expectedDelivery: "2024-05-04",
    },
    {
      id: "SH-7834",
      client: "Global Imports",
      trackingNumber: "TRK-38293",
      origin: "Seattle, WA",
      destination: "Denver, CO",
      status: "Delayed",
      expectedDelivery: "2024-05-01",
    },
    {
      id: "SH-7835",
      client: "United Manufacturing",
      trackingNumber: "TRK-38294",
      origin: "Boston, MA",
      destination: "Houston, TX",
      status: "In Transit",
      expectedDelivery: "2024-05-03",
    },
    {
      id: "SH-7836",
      client: "Eastern Distributors",
      trackingNumber: "TRK-38295",
      origin: "Atlanta, GA",
      destination: "Phoenix, AZ",
      status: "Processing",
      expectedDelivery: "2024-05-05",
    },
  ];
  
  export function RecentShipments() {
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
      <Card className="col-span-4 animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base-content">Recent Shipments</CardTitle>
            <CardDescription className="text-base-content">The latest shipment activity across the company</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="flex items-center text-base-content">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-base-content">ID</TableHead>
                <TableHead className="text-base-content">Client</TableHead>
                <TableHead className="text-base-content">Tracking #</TableHead>
                <TableHead className="text-base-content">Origin</TableHead>
                <TableHead className="text-base-content">Destination</TableHead>
                <TableHead className="text-base-content">Status</TableHead>
                <TableHead className="text-base-content">Expected Delivery</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shipment) => (
                <TableRow key={shipment.id} className="hover:bg-muted/50 cursor-pointer">
                  <TableCell className="font-medium text-base-content">{shipment.id}</TableCell>
                  <TableCell className="text-base-content">{shipment.client}</TableCell>
                  <TableCell className="text-base-content">{shipment.trackingNumber}</TableCell>
                  <TableCell className="text-base-content">{shipment.origin}</TableCell>
                  <TableCell className="text-base-content">{shipment.destination}</TableCell>
                  <TableCell className="text-base-content">
                    <Badge className={`${getStatusColor(shipment.status)} text-base-content`} variant="outline">
                      {shipment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-base-content">{shipment.expectedDelivery}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
  