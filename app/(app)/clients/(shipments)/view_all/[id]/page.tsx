interface PageProps {
    params: { id: string };
  }
  
  export default function ViewSpecificShipment({ params }: PageProps) {
    return <h1>Current Shipment ID: {params.id}</h1>;
  }
  