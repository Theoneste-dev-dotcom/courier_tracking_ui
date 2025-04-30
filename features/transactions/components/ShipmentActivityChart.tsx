import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample data - in a real app, this would come from an API
const data = [
  { name: "Mon", shipments: 12, delivered: 10 },
  { name: "Tue", shipments: 15, delivered: 13 },
  { name: "Wed", shipments: 18, delivered: 14 },
  { name: "Thu", shipments: 14, delivered: 12 },
  { name: "Fri", shipments: 20, delivered: 16 },
  { name: "Sat", shipments: 16, delivered: 13 },
  { name: "Sun", shipments: 10, delivered: 8 },
];

export function ShipmentActivityChart() {
  return (
    <Card className="col-span-4 lg:col-span-2 animate-fade-in">
      <CardHeader>
        <CardTitle>Weekly Shipment Activity</CardTitle>
        <CardDescription>New shipments vs deliveries over the past week</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="shipments" stroke="#0d9488" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="delivered" stroke="#14b8a6" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
