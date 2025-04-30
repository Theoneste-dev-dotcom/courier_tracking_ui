import { Card, CardContent } from "@/components/ui/card";
import { Package, Building, Clock, Check } from "lucide-react";

export function ClientMetrics() {
  // In a real app, this data would come from an API
  const metrics = [
    {
      title: "Active Shipments",
      value: 3,
      icon: Package,
      change: "+2 from last month",
      changeType: "positive"
    },
    {
      title: "Partner Companies",
      value: 5,
      icon: Building,
      change: "+1 from last month",
      changeType: "positive"
    },
    {
      title: "Pending Requests",
      value: 2,
      icon: Clock,
      change: "-3 from last month",
      changeType: "positive"
    },
    {
      title: "Completed Shipments",
      value: 18,
      icon: Check,
      change: "+5 from last month",
      changeType: "positive"
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, i) => (
        <Card key={i} className="animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground text-base-content">
                  {metric.title}
                </span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-base-content">{metric.value}</span>
                  <span className={`text-base-content text-xs ml-2 ${metric.changeType === 'positive' ? 'text-teal-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className="p-2 bg-teal-600/10 rounded-full text-teal-700">
                <metric.icon className="h-5 w-5 text-base-content" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
