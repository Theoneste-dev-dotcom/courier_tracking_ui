import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const API_URL = "https://api.example.com/shipments";

export interface Shipment {
    id?: string;
    sender_name:string;
    sender_address: string;
    sender_phone:string;
    sender_email: string;
    receiver_name: string;
    receiver_address: string;
    receiver_phone: string;
    receiver_email: string;
    shipment_name: string;
    origin_placename:string;
    destination_placename:string;
    shipment_status?: string;
    created_at?: string;
    updated_at?: string;
    origin? : {
        latitude: number;
        longitude: number;
    },
    destination? : {
        latitude: number;
        longitude: number;
    },
    shipment_description?: string;
    shipment_image?: string;
    shipment_weight?: string;
}
interface ShipmentState {
    shipments: Shipment[];
    loading: boolean;
    error: string | null;
  }
  
  // Initial State
  const initialState: ShipmentState = {
    shipments: [],
    loading: false,
    error: null,
  };
  
  type ShipmentApi = ReturnType<typeof createApi>;


// Create API slice
export const shipmentApi = createApi({
    reducerPath: "shipmentApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }), // Set the default API URL
    tagTypes: ["Shipment"], // Caching
    endpoints: (builder) => ({
      // Fetch all shipments
      getShipments: builder.query<Shipment[], void>({
        query: () => "/shipments",
        providesTags: ["Shipment"],
      }),
  
      // Fetch a specific shipment by ID
      getShipmentById: builder.query<Shipment, string>({
        query: (id) => `/shipments/${id}`,
        providesTags: ["Shipment"],
      }),
  
      // Add a new shipment
      addShipment: builder.mutation<Shipment, Omit<Shipment, "id">>({
        query: (shipment) => ({
          url: "/shipments",
          method: "POST",
          body: shipment,
        }),
        invalidatesTags: ["Shipment"],
      }),
  
      // Update shipment
      updateShipment: builder.mutation<Shipment, { id: string; shipment: Partial<Shipment> }>({
        query: ({ id, shipment }) => ({
          url: `/shipments/${id}`,
          method: "PUT",
          body: shipment,
        }),
        invalidatesTags: ["Shipment"],
      }),
  
      // Delete shipment
      deleteShipment: builder.mutation<void, string>({
        query: (id) => ({
          url: `/shipments/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Shipment"],
      }),
    }),
  });
  
  // Export Hooks
  export const {
    useGetShipmentsQuery,
    useGetShipmentByIdQuery,
    useAddShipmentMutation,
    useUpdateShipmentMutation,
    useDeleteShipmentMutation,
  } = shipmentApi;
  