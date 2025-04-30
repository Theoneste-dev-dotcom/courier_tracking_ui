
import React from "react";
import { ShipmentLog } from "../types/shipment";
import { format } from "date-fns";
import { Info, AlertTriangle, X, Check } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ShipmentLogsProps {
  logs: ShipmentLog[];
}

const ShipmentLogs = ({ logs }: ShipmentLogsProps) => {
  if (!logs.length) {
    return (
      <div className="py-4">
        <h3 className="text-lg font-semibold mb-4 text-foreground text-base-content">Shipment Logs</h3>
        <p className="text-muted-foreground text-center py-6  text-base-content">No logs available for this shipment</p>
      </div>
    );
  }

  // Sort logs by timestamp (newest first)
  const sortedLogs = [...logs].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  const getLogIcon = (type: ShipmentLog['type']) => {
    switch (type) {
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case 'error':
        return <X className="h-4 w-4 text-red-500" />;
      case 'success':
        return <Check className="h-4 w-4 text-green-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-4 text-foreground  text-base-content">Shipment Logs</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]  text-base-content">Type</TableHead>
              <TableHead className="text-base-content">Message</TableHead>
              <TableHead className="text-right  text-base-content">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {getLogIcon(log.type)}
                    <span className="capitalize  text-base-content">{log.type}</span>
                  </div>
                </TableCell>
                <TableCell className=" text-base-content">{log.message}</TableCell>
                <TableCell className="text-right  text-base-content">
                  {format(log.timestamp, "MMM d, yyyy • h:mm a")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ShipmentLogs;
