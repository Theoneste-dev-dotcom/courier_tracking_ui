import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export function ClientShipmentStatus() {
  // Sample data - in a real app, this would come from an API
  const data = [
    { name: "In Transit", value: 3, color: "#0d9488" },
    { name: "Delivered", value: 8, color: "#14b8a6" },
    { name: "Processing", value: 2, color: "#5eead4" },
    { name: "Delayed", value: 1, color: "#f43f5e" },
  ];

  return (
    <Card className="col-span-4 lg:col-span-2 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-base-content">Shipment Status Overview</CardTitle>
        <CardDescription className="text-base-content">Distribution of your shipments by status</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
