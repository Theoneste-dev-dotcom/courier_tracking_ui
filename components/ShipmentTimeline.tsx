
import React from "react";
import { ShipmentUpdate } from "../types/shipment";
import { format } from "date-fns";
import { CheckCircle, Circle } from "lucide-react";

interface ShipmentTimelineProps {
  updates: ShipmentUpdate[];
  currentStatus: string;
}

const ShipmentTimeline = ({ updates, currentStatus }: ShipmentTimelineProps) => {
  // Sort updates by timestamp
  const sortedUpdates = [...updates].sort(
    (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
  );

  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Shipment Progress</h3>
      <div className="relative">
        {sortedUpdates.map((update, index) => {
          const isActive = update.status === currentStatus;
          const isPast = sortedUpdates.indexOf(sortedUpdates.find(u => u.status === currentStatus)!) > index;
          
          return (
            <div key={update.id} className="mb-8 flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className="flex-shrink-0">
                  {isPast || isActive ? (
                    <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-600" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                  )}
                </div>
                {index < sortedUpdates.length - 1 && (
                  <div className={`h-14 w-0.5 ${isPast ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-600"}`}></div>
                )}
              </div>
              <div className={`pt-0.5 ${isActive ? "text-teal-600 dark:text-teal-600" : "text-foreground"}`}>
                <p className="font-medium">{update.status}</p>
                <p className="text-sm text-muted-foreground">{update.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(update.timestamp, "MMM d, yyyy • h:mm a")}
                </p>
                <p className="text-xs text-muted-foreground">{update.location.placeName}</p>
              </div>
            </div>
          );
        })}
        
        {/* Delivery step always appears last */}
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <Circle className="h-6 w-6 text-gray-300 dark:text-gray-600" />
          </div>
          <div className="pt-0.5">
            <p className="font-medium">Delivered</p>
            <p className="text-sm text-muted-foreground">Package will be delivered to recipient</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentTimeline;
