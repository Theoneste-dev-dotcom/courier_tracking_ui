import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// Sample data - in a real app, this would come from an API
const data = [
  { name: "In Transit", value: 24, color: "#0d9488" },
  { name: "Delivered", value: 45, color: "#14b8a6" },
  { name: "Processing", value: 12, color: "#5eead4" },
  { name: "Delayed", value: 3, color: "#f43f5e" },
];

export function ShipmentStatusChart() {
  return (
    <Card className="col-span-4 lg:col-span-2 animate-fade-in">
      <CardHeader>
        <CardTitle>Shipment Status Overview</CardTitle>
        <CardDescription>Distribution of current shipments by status</CardDescription>
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
              label={({ name, percent }) => `${name} ${(percent? percent : 1 * 100).toFixed(0)}%`}
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
