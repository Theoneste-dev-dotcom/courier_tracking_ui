
import { Progress } from "@/components/ui/progress";
import { Shipment, ShipmentUpdate } from "../types/shipment";
import { calculateDeliveryProgress } from "./services/shipmentService";

interface DeliveryProgressProps {
  shipment: Shipment;
  updates: ShipmentUpdate[];
}

const DeliveryProgress = ({ shipment, updates }: DeliveryProgressProps) => {
  const progressValue = calculateDeliveryProgress(updates);
  
  const getStatusLabel = () => {
    switch(shipment.status) {
      case "Order Placed":
        return "Order Confirmed";
      case "Package Picked Up":
        return "Picked Up";
      case "In Transit":
        return "In Transit";
      case "Out for Delivery":
        return "Out for Delivery";
      case "Delivered":
        return "Delivered";
      default:
        return shipment.status;
    }
  };
  
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-semibold text-base-content">Origin</span>
        <span className="font-semibold text-base-content">Destination</span>
      </div>
      
      <div className="relative mb-2">
        <Progress value={progressValue} className="h-2 bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="flex justify-end">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-teal-600 text-white font-medium">
          {getStatusLabel()}
        </span>
      </div>
    </div>
  );
};

export default DeliveryProgress;
