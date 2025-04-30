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
  import { Building } from "lucide-react";
  
  interface Company {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    shipmentCount: number;
    status: string;
  }
  
  export function ClientCompanies() {
    // Sample company data - in a real app, this would come from an API
    const companies: Company[] = [
      {
        id: 1,
        name: "FastTransit Logistics",
        email: "contact@fasttransit.com",
        phone: "555-123-4567",
        address: "123 Logistics Way, New York, NY 10001",
        shipmentCount: 3,
        status: "Active"
      },
      {
        id: 2,
        name: "Global Express",
        email: "info@globalexpress.com",
        phone: "555-234-5678",
        address: "456 Shipping Lane, Los Angeles, CA 90001",
        shipmentCount: 2,
        status: "Active"
      },
      {
        id: 3,
        name: "QuickShip Services",
        email: "support@quickship.com",
        phone: "555-345-6789",
        address: "789 Delivery Road, Chicago, IL 60007",
        shipmentCount: 2,
        status: "Active"
      },
      {
        id: 4,
        name: "Metro Delivery",
        email: "contact@metrodelivery.com",
        phone: "555-456-7890",
        address: "101 Transit Blvd, Houston, TX 77001",
        shipmentCount: 0,
        status: "Inactive"
      },
      {
        id: 5,
        name: "Pacific Transport Co",
        email: "info@pacifictransport.com",
        phone: "555-567-8901",
        address: "202 Harbor Drive, San Francisco, CA 94101",
        shipmentCount: 0,
        status: "Inactive"
      }
    ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const companiesPerPage = 5;
  
    // Get current companies
    const indexOfLastCompany = currentPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);
    
    // Calculate page numbers
    const totalPages = Math.ceil(companies.length / companiesPerPage);
    
    return (
      <Card className="animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5 text-primary" />
            <div>
              <CardTitle>Partner Companies</CardTitle>
              <CardDescription>Companies you work with for your shipments</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {companies.length} Partner Companies
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-medium">Company Name</TableHead>
                <TableHead className="font-medium">Email</TableHead>
                <TableHead className="font-medium">Phone</TableHead>
                <TableHead className="font-medium">Address</TableHead>
                <TableHead className="font-medium">Shipments</TableHead>
                <TableHead className="font-medium">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCompanies.length > 0 ? (
                currentCompanies.map((company) => (
                  <TableRow key={company.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.email}</TableCell>
                    <TableCell>{company.phone}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {company.address}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-teal-50 text-teal-700">
                        {company.shipmentCount} Shipments
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={company.status === "Active" ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-700"}
                      >
                        {company.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                    No companies found
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
  