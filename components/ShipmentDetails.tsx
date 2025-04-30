import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shipment, UserDetails } from "../types/shipment";
import { format } from "date-fns";
import { MapPin, Package } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ShipmentDetailsProps {
  shipment: Shipment;
}

const ContactCard = ({ title, details }: { title: string; details?: UserDetails }) => {
  if (!details) return null;
  
  return (
    <div className="space-y-2">
      <h4 className="font-medium text-sm">{title}</h4>
      <div className="text-sm space-y-1">
        <p className="font-medium">{details.name}</p>
        <p className="text-muted-foreground">{details.location_name}</p>
        <p className="text-muted-foreground">{details.email}</p>
        <p className="text-muted-foreground">{details.phone}</p>
      </div>
    </div>
  );
};

const ShipmentDetails = ({ shipment }: ShipmentDetailsProps) => {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Package className="h-5 w-5 text-teal-600" />
          Shipment Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          {/* Left column with shipment details */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Tracking Number</p>
              <p className="font-medium">{shipment.trackingNumber}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="font-medium">
                {shipment.expectedDeliveryDate 
                  ? format(shipment.expectedDeliveryDate, "MMMM d, yyyy")
                  : "Not available"}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Weight</p>
              <p className="font-medium">{shipment.weight} lbs</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Date Created</p>
              <p className="font-medium">
                {format(shipment.createdAt, "MMMM d, yyyy")}
              </p>
            </div>
          </div>
          
          {/* Right column with locations */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Origin
              </p>
              <p className="font-medium">{shipment.origin.placeName}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Destination
              </p>
              <p className="font-medium">{shipment.destination.placeName}</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-2 gap-6">
          <ContactCard title="Sender" details={shipment.senderDetails} />
          <ContactCard title="Recipient" details={shipment.receiverDetails} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ShipmentDetails;
