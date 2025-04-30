
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
  import { Users } from "lucide-react";
  
  interface Client {
    id: number;
    user: {
      id: number;
      name: string;
      email: string;
      phone?: string;
      address?: string;
      about?: string;
    };
    clientOfCompanies?: any[];
    shipments?: any[];
  }
  
  interface ShipmentClientTableProps {
    clients: Client[];
  }
  
  export function ShipmentClientTable({ clients = [] }: ShipmentClientTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const clientsPerPage = 5;
  
    // Get current clients
    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);
    
    // Calculate page numbers
    const totalPages = Math.ceil(clients.length / clientsPerPage);
    
    return (
      <Card className="col-span-4 animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <CardTitle>Client Directory</CardTitle>
              <CardDescription>List of all clients associated with the company</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {clients.length} Total Clients
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-medium">Client Name</TableHead>
                <TableHead className="font-medium">Email</TableHead>
                <TableHead className="font-medium">Phone</TableHead>
                <TableHead className="font-medium">Address</TableHead>
                <TableHead className="font-medium">Shipments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentClients.length > 0 ? (
                currentClients.map((client) => (
                  <TableRow key={client.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{client.user.name}</TableCell>
                    <TableCell>{client.user.email}</TableCell>
                    <TableCell>{client.user.phone || "—"}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {client.user.address || "—"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-teal-50 text-teal-700">
                        {client.shipments?.length || 0} Orders
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    No clients found
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