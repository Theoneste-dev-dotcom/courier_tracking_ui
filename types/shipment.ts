
export interface LocationType {
    longitude: number;
    latitude: number;
    placeName: string;
  }
  
  export interface UserDetails {
    name: string;
    email: string;
    phone: number;
    location_name: string;
  }
  
  export interface CompanyDetails {
    name: string;
    email?: string;
    phone?: number;
    logo?: string;
  }
  
  export interface ShipmentUpdate {
    id: number;
    status: string;
    description: string;
    location: LocationType;
    timestamp: Date;
  }
  
  export interface Shipment {
    id: number;
    name: string;
    senderDetails?: UserDetails;
    receiverDetails?: UserDetails;
    status: string;
    origin: LocationType;
    destination: LocationType;
    trackingNumber?: string;
    expectedDeliveryDate?: Date;
    weight?: number;
    createdAt: Date;
    shipmentUpdate?: ShipmentUpdate;
    companyDetails?: CompanyDetails;
  }
  
  export interface ShipmentLog {
    id: number;
    message: string;
    timestamp: Date;
    type: 'info' | 'warning' | 'error' | 'success';
    userId?: number;
  }
  