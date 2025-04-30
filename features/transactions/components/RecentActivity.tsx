import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Plus, Truck, User, UserCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    action: "Shipment Delivered",
    description: "Shipment #SH-7825 was delivered successfully",
    icon: Check,
    iconColor: "bg-green-500",
    time: "20 minutes ago",
  },
  {
    id: 2,
    action: "Driver Added",
    description: "Officer Jane Smith added new driver Thomas Brown",
    icon: Plus,
    iconColor: "bg-blue-500",
    time: "1 hour ago",
  },
  {
    id: 3,
    action: "New Shipment",
    description: "Client Acme Corp requested a new shipment",
    icon: Truck,
    iconColor: "bg-teal-600",
    time: "2 hours ago",
  },
  {
    id: 4,
    action: "Status Update",
    description: "Shipment #SH-7832 status changed to In Transit",
    icon: Clock,
    iconColor: "bg-amber-500",
    time: "3 hours ago",
  },
  {
    id: 5,
    action: "Client Added",
    description: "New client Global Imports was added to the system",
    icon: User,
    iconColor: "bg-indigo-500",
    time: "5 hours ago",
  },
  {
    id: 6,
    action: "Officer Update",
    description: "Officer permissions updated by Admin",
    icon: UserCircle,
    iconColor: "bg-purple-500",
    time: "6 hours ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="col-span-4 md:col-span-2 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-base-content">Recent Activity</CardTitle>
        <CardDescription className="text-base-content">Latest company activity logs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="relative mt-1">
                <div className={`p-1.5 rounded-full ${activity.iconColor} text-white`}>
                  <activity.icon className="h-3 w-3" />
                </div>
                {activity.id !== activities.length && (
                  <div className="absolute top-8 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-muted"></div>
                )}
              </div>
              <div>
                <p className="font-medium text-sm text-base-content">{activity.action}</p>
                <p className="text-xs text-muted-foreground text-base-content">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1 text-gray-400 dark:text-teal-900">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
