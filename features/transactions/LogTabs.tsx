import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";
import { DashboardMetrics } from "./components/DashboardMetrics";
import { ShipmentStatusChart } from "./components/ShipmentStatusChart";
import { ShipmentActivityChart } from "./components/ShipmentActivityChart";
import { RecentShipments } from "./components/RecentShipments";
import { ActiveDrivers } from "./components/ActiveDriver";
import { RecentActivity } from "./components/RecentActivity";
import { ShipmentClientTable } from "@/components/ShipmentClientTable";


// Sample client data - in a real app, this would come from an API
const clients = [
    {
      id: 1,
      user: {
        id: 101,
        name: "Alex Morgan",
        email: "alex.morgan@example.com",
        phone: "555-123-4567",
        address: "123 Main St, New York, NY 10001",
      },
      shipments: [{ id: 1 }, { id: 2 }]
    },
    {
      id: 2,
      user: {
        id: 102,
        name: "Jamie Williams",
        email: "jamie.williams@example.com",
        phone: "555-234-5678",
        address: "456 Oak Ave, Los Angeles, CA 90001",
      },
      shipments: [{ id: 3 }]
    },
    {
      id: 3,
      user: {
        id: 103,
        name: "Taylor Smith",
        email: "taylor.smith@example.com",
        phone: "555-345-6789",
        address: "789 Pine St, Chicago, IL 60007",
      },
      shipments: []
    },
    {
      id: 4,
      user: {
        id: 104,
        name: "Jordan Brown",
        email: "jordan.brown@example.com",
        phone: "555-456-7890",
        address: "101 Maple Dr, Houston, TX 77001",
      },
      shipments: [{ id: 4 }, { id: 5 }, { id: 6 }]
    },
    {
      id: 5,
      user: {
        id: 105,
        name: "Casey Johnson",
        email: "casey.johnson@example.com",
        phone: "555-567-8901",
        address: "202 Elm St, Phoenix, AZ 85001",
      },
      shipments: [{ id: 7 }]
    },
    {
      id: 6,
      user: {
        id: 106,
        name: "Riley Davis",
        email: "riley.davis@example.com",
        phone: "555-678-9012",
        address: "303 Cedar Rd, Philadelphia, PA 19019",
      },
      shipments: [{ id: 8 }, { id: 9 }]
    },
    {
      id: 7,
      user: {
        id: 107,
        name: "Avery Wilson",
        email: "avery.wilson@example.com",
        phone: "555-789-0123",
        address: "404 Birch Blvd, San Antonio, TX 78201",
      },
      shipments: []
    },
  ];

  
export function LogTabs() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <TabsList>
          <TabsTrigger value="overview " className="text-base-content">Overview</TabsTrigger>
          <TabsTrigger value="shipments " className="text-base-content">Shipments</TabsTrigger>
          <TabsTrigger value="clients " className="text-base-content">Clients</TabsTrigger>
          <TabsTrigger value="drivers " className="text-base-content">Drivers</TabsTrigger>
          <TabsTrigger value="officers " className="text-base-content">Officers</TabsTrigger>
        </TabsList>
        
        <div className="flex w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search logs..."
              className="pl-9 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <TabsContent value="overview" className="space-y-4">
        <DashboardMetrics />
        <div className="grid grid-cols-4 gap-4">
          <ShipmentStatusChart />
          <ShipmentActivityChart />
        </div>
        <RecentShipments />
        <div className="grid grid-cols-4 gap-4">
          <ActiveDrivers />
          <RecentActivity />
        </div>
      </TabsContent>

      <TabsContent value="shipments" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-base-content">Shipment Logs</h2>
          <Button variant="outline" className="text-base-content">Export Data</Button>
        </div>
        <RecentShipments />
      </TabsContent>

      <TabsContent value="clients" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-base-content">Client Logs</h2>
          <Button variant="outline" className="text-base-content">Export Data</Button>
        </div>
        <ShipmentClientTable clients={clients} />
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-base-content">Client Activity</CardTitle>
            <CardDescription className="text-base-content">Details of client interactions and shipments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-base-content" >
              Client data would be displayed here. In a real application, this would include client
              lists, their shipment history, and interaction logs.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="drivers" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-base-content" >Driver Logs</h2>
          <Button variant="outline" className="text-base-content">Export Data</Button>
        </div>
        <ActiveDrivers />
      </TabsContent>

      <TabsContent value="officers" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-base-content">Officer Logs</h2>
          <Button variant="outline" className="text-base-content">Export Data</Button>
        </div>
        <RecentActivity />
      </TabsContent>
    </Tabs>
  );
}
