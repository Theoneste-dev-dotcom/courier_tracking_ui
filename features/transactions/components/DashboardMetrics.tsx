import { ArrowDown, ArrowRight, ArrowUp, Truck, UserCircle, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
          <Truck className="h-4 w-4 text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">
            +2 since yesterday
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Available Drivers</CardTitle>
          <UserCircle className="h-4 w-4 text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">17</div>
          <div className="flex items-center pt-1">
            <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
            <p className="text-xs text-green-500">
              +3 from last week
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
          <Users className="h-4 w-4 text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">238</div>
          <div className="flex items-center pt-1">
            <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
            <p className="text-xs text-green-500">
              +12% from last month
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Delayed Shipments</CardTitle>
          <Truck className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <div className="flex items-center pt-1">
            <ArrowDown className="h-3 w-3 mr-1 text-green-500" />
            <p className="text-xs text-green-500">
              -2 from last week
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
