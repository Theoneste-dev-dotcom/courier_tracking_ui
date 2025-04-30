import { useState } from "react";
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

export function LogTabs() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="officers">Officers</TabsTrigger>
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
          <h2 className="text-xl font-semibold">Shipment Logs</h2>
          <Button variant="outline">Export Data</Button>
        </div>
        <RecentShipments />
      </TabsContent>

      <TabsContent value="clients" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Client Logs</h2>
          <Button variant="outline">Export Data</Button>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Client Activity</CardTitle>
            <CardDescription>Details of client interactions and shipments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Client data would be displayed here. In a real application, this would include client
              lists, their shipment history, and interaction logs.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="drivers" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Driver Logs</h2>
          <Button variant="outline">Export Data</Button>
        </div>
        <ActiveDrivers />
      </TabsContent>

      <TabsContent value="officers" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Officer Logs</h2>
          <Button variant="outline">Export Data</Button>
        </div>
        <RecentActivity />
      </TabsContent>
    </Tabs>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
