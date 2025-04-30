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
  import { useState } from "react";
  import { 
    Pagination, 
    PaginationContent, 
    PaginationItem, 
    PaginationLink, 
    PaginationNext, 
    PaginationPrevious 
  } from "@/components/ui/pagination";
  import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
  
  interface ClientRequestsProps {
    showSummary: boolean;
  }
  
  export function ClientRequests({ showSummary }: ClientRequestsProps) {
    // Sample request data - in a real app, this would come from an API
    const requests = [
      {
        id: "REQ-1001",
        company: "FastTransit Logistics",
        type: "Package Transfer",
        origin: "New York, NY",
        destination: "Los Angeles, CA",
        status: "Pending",
        requestDate: "2024-04-28",
      },
      {
        id: "REQ-1002",
        company: "Global Express",
        type: "Delivery Reschedule",
        origin: "Chicago, IL",
        destination: "Miami, FL",
        status: "Resolved",
        requestDate: "2024-04-25",
      },
      {
        id: "REQ-1003",
        company: "QuickShip Services",
        type: "Package Transfer",
        origin: "Seattle, WA",
        destination: "Denver, CO",
        status: "In Progress",
        requestDate: "2024-04-27",
      },
      {
        id: "REQ-1004",
        company: "FastTransit Logistics",
        type: "Address Change",
        origin: "Boston, MA",
        destination: "Houston, TX",
        status: "Pending",
        requestDate: "2024-04-29",
      },
      {
        id: "REQ-1005",
        company: "Global Express",
        type: "Cancellation",
        origin: "Atlanta, GA",
        destination: "Phoenix, AZ",
        status: "Resolved",
        requestDate: "2024-04-23",
      },
    ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const requestsPerPage = 5;
  
    // Get current requests
    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);
    
    // Calculate page numbers
    const totalPages = Math.ceil(requests.length / requestsPerPage);
    
    const getStatusColor = (status: string) => {
      switch (status) {
        case "Pending":
          return "bg-amber-100 text-amber-700";
        case "In Progress":
          return "bg-blue-100 text-blue-700";
        case "Resolved":
          return "bg-green-100 text-green-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    };
  
    // Request status summary data
    const summaryData = [
      { name: "Pending", value: 2, color: "#f59e0b" },
      { name: "In Progress", value: 1, color: "#3b82f6" },
      { name: "Resolved", value: 2, color: "#10b981" },
    ];
  
    return (
      <Card className={`animate-fade-in ${showSummary ? "col-span-4 lg:col-span-2" : ""}`}>
        <CardHeader>
          <CardTitle>Client Requests</CardTitle>
          <CardDescription>Track the status of your shipment requests</CardDescription>
        </CardHeader>
        <CardContent>
          {showSummary && (
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={summaryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {summaryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
          
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-medium">Request ID</TableHead>
                <TableHead className="font-medium">Company</TableHead>
                <TableHead className="font-medium">Type</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="font-medium">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRequests.length > 0 ? (
                currentRequests.map((request) => (
                  <TableRow key={request.id} className="hover:bg-muted/50 cursor-pointer">
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.company}</TableCell>
                    <TableCell>{request.type}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(request.status)} variant="outline">
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    No requests found
                  </TableCell>
                </TableRow>
              )}
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
  