import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Sample driver data - in a real app, this would come from an API
const drivers = [
  {
    id: 1,
    name: "Michael Johnson",
    avatar: "",
    initials: "MJ",
    location: "Los Angeles, CA",
    status: "On Route",
    currentShipment: "SH-7832",
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "",
    initials: "SW",
    location: "Detroit, MI",
    status: "Available",
    currentShipment: null,
  },
  {
    id: 3,
    name: "Robert Davis",
    avatar: "",
    initials: "RD",
    location: "Chicago, IL",
    status: "On Route",
    currentShipment: "SH-7835",
  },
  {
    id: 4,
    name: "Jennifer Miller",
    avatar: "",
    initials: "JM",
    location: "Phoenix, AZ",
    status: "Available",
    currentShipment: null,
  },
];

export function ActiveDrivers() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Route":
        return "bg-teal-100 text-teal-700";
      case "Available":
        return "bg-green-100 text-green-700";
      case "Off Duty":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <Card className="col-span-4 md:col-span-2 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-base-content">Active Drivers</CardTitle>
        <CardDescription className="text-base-content">Current status of company drivers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={driver.avatar} />
                  <AvatarFallback className="bg-teal-200 text-teal-700">
                    {driver.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-base-content">{driver.name}</p>
                  <p className="text-xs text-muted-foreground text-base-content">{driver.location}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <Badge className={`${getStatusColor(driver.status)} text-base-content`}>
                  {driver.status}
                </Badge>
                {driver.currentShipment && (
                  <span className="text-xs text-muted-foreground mt-1 text-base-content">
                    Shipment: {driver.currentShipment}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
