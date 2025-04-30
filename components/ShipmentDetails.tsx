import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shipment, UserDetails } from "../types/shipment";
import { format } from "date-fns";
import { MapPin, Package } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ShipmentDetailsProps {
  shipment: Shipment;
}

const ContactCard = ({
  title,
  details,
}: {
  title: string;
  details?: UserDetails;
}) => {
  if (!details) return null;

  return (
    <div className="space-y-1">
      <h4 className="text-base-content font-medium text-lg">{title}</h4>
      <div className="text-base-content text-sm space-y-1">
        <p className="text-base-content font-medium">{details.name}</p>
        <p className="text-base-content text-muted-foreground">
          {details.location_name}
        </p>
        <p
          className="text-base-content text-muted-foreground w-20 truncate inline-block"
          title={details.email}
        >
          {details.email}
        </p>
        <p className="text-base-content text-muted-foreground">
          {details.phone}
        </p>
      </div>
    </div>
  );
};

const ShipmentDetails = ({ shipment }: ShipmentDetailsProps) => {
  return (
    <Card className="text-base-content border border-border">
      <CardHeader className="text-base-content pb-2">
        <CardTitle className="text-base-content text-lg flex items-center gap-2">
          <Package className="h-5 w-5 text-teal-600" />
          <span className=" text-base-content"> Shipment Details</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-base-content grid grid-cols-2 gap-6">
          {/* Left column with shipment details */}
          <div className="text-base-content space-y-4">
            <div>
              <p className=" text-sm text-muted-foreground text-base-content">
                Tracking Number
              </p>
              <p className=" font-medium text-base-content">
                {shipment.trackingNumber}
              </p>
            </div>

            <div>
              <p className=" text-sm text-muted-foreground text-base-content">
                Estimated Delivery
              </p>
              <p className="font-medium text-base-content">
                {shipment.expectedDeliveryDate
                  ? format(shipment.expectedDeliveryDate, "MMMM d, yyyy")
                  : "Not available"}
              </p>
            </div>

            <div>
              <p className=" text-sm text-muted-foreground text-base-content">
                Weight
              </p>
              <p className=" font-medium text-base-content">
                {shipment.weight} lbs
              </p>
            </div>

            <div>
              <p className=" text-sm text-muted-foreground text-base-content">
                Date Created
              </p>
              <p className=" font-medium text-base-content">
                {format(shipment.createdAt, "MMMM d, yyyy")}
              </p>
            </div>
          </div>

          {/* Right column with locations */}
          <div className="text-base-content space-y-4">
            <div>
              <p className="text-base-content text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4 text-base-content" /> Origin
              </p>
              <p className="font-medium text-base-content">
                {shipment.origin.placeName}
              </p>
            </div>

            <div>
              <p className="text-base-content text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className=" h-4 w-4 text-base-content" /> Destination
              </p>
              <p className=" font-medium text-base-content">
                {shipment.destination.placeName}
              </p>
            </div>
          </div>
        </div>

        <Separator className="text-base-content my-6" />

        <div className="grid grid-cols-2 gap-6">
          <ContactCard title=" Sender" details={shipment.senderDetails} />
          <ContactCard title=" Recipient" details={shipment.receiverDetails} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ShipmentDetails;
