export const branches = [
    {
      "id": "TS001",
      "name": "New York Central Station",
      "address": "123 Main St, New York, NY",
      "contact": "+1 555-0001",
      "email": "ny.central@example.com",
      "manager": "John Carter",
      "operating_hours": "06:00 AM - 10:00 PM"
    },
    {
      "id": "TS002",
      "name": "Los Angeles Freight Hub",
      "address": "789 Sunset Blvd, Los Angeles, CA",
      "contact": "+1 555-0002",
      "email": "la.freight@example.com",
      "manager": "Lisa Walker",
      "operating_hours": "05:30 AM - 11:00 PM"
    },
    {
      "id": "TS003",
      "name": "Chicago Distribution Center",
      "address": "456 Lake Shore Dr, Chicago, IL",
      "contact": "+1 555-0003",
      "email": "chicago.dc@example.com",
      "manager": "Michael Brown",
      "operating_hours": "07:00 AM - 09:00 PM"
    },
    {
      "id": "TS004",
      "name": "Houston Cargo Terminal",
      "address": "101 Main St, Houston, TX",
      "contact": "+1 555-0004",
      "email": "houston.cargo@example.com",
      "manager": "Emily Johnson",
      "operating_hours": "06:30 AM - 10:30 PM"
    },
    {
      "id": "TS005",
      "name": "San Francisco Logistics Hub",
      "address": "321 Bay St, San Francisco, CA",
      "contact": "+1 555-0005",
      "email": "sf.logistics@example.com",
      "manager": "David Martinez",
      "operating_hours": "06:00 AM - 08:00 PM"
    },
    {
      "id": "TS006",
      "name": "Miami Express Station",
      "address": "654 Ocean Dr, Miami, FL",
      "contact": "+1 555-0006",
      "email": "miami.express@example.com",
      "manager": "Sophia Clark",
      "operating_hours": "05:00 AM - 11:30 PM"
    },
    {
      "id": "TS007",
      "name": "Seattle Cargo Facility",
      "address": "876 Rainier Ave, Seattle, WA",
      "contact": "+1 555-0007",
      "email": "seattle.cargo@example.com",
      "manager": "William Robinson",
      "operating_hours": "06:30 AM - 09:30 PM"
    },
    {
      "id": "TS008",
      "name": "Denver Freight Terminal",
      "address": "567 Rocky Rd, Denver, CO",
      "contact": "+1 555-0008",
      "email": "denver.freight@example.com",
      "manager": "Olivia White",
      "operating_hours": "07:00 AM - 09:00 PM"
    },
    {
      "id": "TS009",
      "name": "Atlanta Transport Hub",
      "address": "321 Peachtree St, Atlanta, GA",
      "contact": "+1 555-0009",
      "email": "atlanta.transport@example.com",
      "manager": "Daniel Thompson",
      "operating_hours": "06:00 AM - 10:00 PM"
    },
    {
      "id": "TS010",
      "name": "Boston Logistics Center",
      "address": "432 Charles St, Boston, MA",
      "contact": "+1 555-0010",
      "email": "boston.logistics@example.com",
      "manager": "Ava Harris",
      "operating_hours": "06:30 AM - 09:00 PM"
    }
  ]
  

export const drivers = [
    {
      "id": "DRV001",
      "name": "James Anderson",
      "phone": "+1 555-2222",
      "email": "james.anderson@example.com",
      "vehicle_number": "TX1234"
    },
    {
      "id": "DRV002",
      "name": "Robert Martinez",
      "phone": "+1 555-3333",
      "email": "robert.martinez@example.com",
      "vehicle_number": "CA5678"
    },
    {
      "id": "DRV003",
      "name": "Sophia Clark",
      "phone": "+1 555-4444",
      "email": "sophia.clark@example.com",
      "vehicle_number": "FL9101"
    },
    {
      "id": "DRV004",
      "name": "Michael Johnson",
      "phone": "+1 555-5555",
      "email": "michael.johnson@example.com",
      "vehicle_number": "NY1122"
    },
    {
      "id": "DRV005",
      "name": "Emily Davis",
      "phone": "+1 555-6666",
      "email": "emily.davis@example.com",
      "vehicle_number": "WA3344"
    },
    {
      "id": "DRV006",
      "name": "William Rodriguez",
      "phone": "+1 555-7777",
      "email": "william.rodriguez@example.com",
      "vehicle_number": "NV5566"
    },
    {
      "id": "DRV007",
      "name": "Olivia Lewis",
      "phone": "+1 555-8888",
      "email": "olivia.lewis@example.com",
      "vehicle_number": "TX7788"
    },
    {
      "id": "DRV008",
      "name": "Daniel White",
      "phone": "+1 555-9999",
      "email": "daniel.white@example.com",
      "vehicle_number": "IL9900"
    },
    {
      "id": "DRV009",
      "name": "Ava Thompson",
      "phone": "+1 555-1010",
      "email": "ava.thompson@example.com",
      "vehicle_number": "GA1122"
    },
    {
      "id": "DRV010",
      "name": "Ethan Harris",
      "phone": "+1 555-1111",
      "email": "ethan.harris@example.com",
      "vehicle_number": "OH2233"
    }
  ]
  

export const shipments = [
    {
        "id": "1",
        "sender_name": "John Doe",
        "sender_address": "1234 Elm Street, Springfield, IL",
        "sender_phone": "555-1234",
        "sender_email": "johndoe@example.com",
        "receiver_name": "Alice Smith",
        "receiver_address": "5678 Oak Avenue, Chicago, IL",
        "receiver_phone": "555-5678",
        "receiver_email": "alicesmith@example.com",
        "shipment_name": "Books",
        "origin_placename": "Springfield, IL",
        "destination_placename": "Chicago, IL",
        "shipment_status": "In Transit",
        "created_at": "2025-02-10T10:00:00Z",
        "updated_at": "2025-02-12T15:00:00Z",
        "origin": {
            "latitude": 39.7817,
            "longitude": -89.6501
        },
        "destination": {
            "latitude": 41.8781,
            "longitude": -87.6298
        },
        "shipment_description": "Box of books",
        "shipment_image": "https://example.com/shipments/1.jpg",
        "shipment_weight": "10kg"
    },
    {
        "id": "2",
        "sender_name": "Mary Johnson",
        "sender_address": "9876 Pine Street, Naperville, IL",
        "sender_phone": "555-2345",
        "sender_email": "maryjohnson@example.com",
        "receiver_name": "Bob Lee",
        "receiver_address": "4321 Maple Road, Evanston, IL",
        "receiver_phone": "555-8765",
        "receiver_email": "boblee@example.com",
        "shipment_name": "Clothes",
        "origin_placename": "Naperville, IL",
        "destination_placename": "Evanston, IL",
        "shipment_status": "Delivered",
        "created_at": "2025-02-05T08:00:00Z",
        "updated_at": "2025-02-07T11:00:00Z",
        "origin": {
            "latitude": 41.7857,
            "longitude": -88.1471
        },
        "destination": {
            "latitude": 42.0413,
            "longitude": -87.6877
        },
        "shipment_description": "Box of clothes",
        "shipment_image": "https://example.com/shipments/2.jpg",
        "shipment_weight": "5kg"
    },
    {
        "id": "3",
        "sender_name": "David Miller",
        "sender_address": "123 Oakwood Drive, Arlington Heights, IL",
        "sender_phone": "555-3456",
        "sender_email": "davidmiller@example.com",
        "receiver_name": "Rachel Green",
        "receiver_address": "789 Birch Lane, Glenview, IL",
        "receiver_phone": "555-2345",
        "receiver_email": "rachelgreen@example.com",
        "shipment_name": "Electronics",
        "origin_placename": "Arlington Heights, IL",
        "destination_placename": "Glenview, IL",
        "shipment_status": "Pending",
        "created_at": "2025-02-08T09:30:00Z",
        "updated_at": "2025-02-09T10:00:00Z",
        "origin": {
            "latitude": 42.0884,
            "longitude": -87.9806
        },
        "destination": {
            "latitude": 42.0750,
            "longitude": -87.7873
        },
        "shipment_description": "Laptop and accessories",
        "shipment_image": "https://example.com/shipments/3.jpg",
        "shipment_weight": "3kg"
    },
    {
        "id": "4",
        "sender_name": "James Anderson",
        "sender_address": "4321 Elmwood Avenue, Schaumburg, IL",
        "sender_phone": "555-4567",
        "sender_email": "jamesanderson@example.com",
        "receiver_name": "Olivia Carter",
        "receiver_address": "6542 Ash Street, Aurora, IL",
        "receiver_phone": "555-5679",
        "receiver_email": "oliviacarter@example.com",
        "shipment_name": "Furniture",
        "origin_placename": "Schaumburg, IL",
        "destination_placename": "Aurora, IL",
        "shipment_status": "In Transit",
        "created_at": "2025-02-11T14:30:00Z",
        "updated_at": "2025-02-13T12:00:00Z",
        "origin": {
            "latitude": 42.0334,
            "longitude": -88.0834
        },
        "destination": {
            "latitude": 41.7606,
            "longitude": -88.3201
        },
        "shipment_description": "Sofa and chairs",
        "shipment_image": "https://example.com/shipments/4.jpg",
        "shipment_weight": "30kg"
    },
    {
        "id": "5",
        "sender_name": "Linda Thomas",
        "sender_address": "1234 Cherry Street, Oak Park, IL",
        "sender_phone": "555-6789",
        "sender_email": "lindathomas@example.com",
        "receiver_name": "Sophia Taylor",
        "receiver_address": "8765 Cedar Road, Skokie, IL",
        "receiver_phone": "555-7890",
        "receiver_email": "sophiataylor@example.com",
        "shipment_name": "Toys",
        "origin_placename": "Oak Park, IL",
        "destination_placename": "Skokie, IL",
        "shipment_status": "Delivered",
        "created_at": "2025-02-09T13:15:00Z",
        "updated_at": "2025-02-12T17:30:00Z",
        "origin": {
            "latitude": 41.8800,
            "longitude": -87.8006
        },
        "destination": {
            "latitude": 42.0324,
            "longitude": -87.7457
        },
        "shipment_description": "Plastic toys and puzzles",
        "shipment_image": "https://example.com/shipments/5.jpg",
        "shipment_weight": "8kg"
    },
    {
        "id": "6",
        "sender_name": "Charles White",
        "sender_address": "5678 Pine Road, Downers Grove, IL",
        "sender_phone": "555-1234",
        "sender_email": "charleswhite@example.com",
        "receiver_name": "Emma Wilson",
        "receiver_address": "2345 Oak Road, Wheaton, IL",
        "receiver_phone": "555-5678",
        "receiver_email": "emmawilson@example.com",
        "shipment_name": "Food Items",
        "origin_placename": "Downers Grove, IL",
        "destination_placename": "Wheaton, IL",
        "shipment_status": "Pending",
        "created_at": "2025-02-12T10:00:00Z",
        "updated_at": "2025-02-14T16:00:00Z",
        "origin": {
            "latitude": 41.8085,
            "longitude": -88.0121
        },
        "destination": {
            "latitude": 41.8669,
            "longitude": -88.1060
        },
        "shipment_description": "Box of canned food",
        "shipment_image": "https://example.com/shipments/6.jpg",
        "shipment_weight": "12kg"
    },
    {
        "id": "7",
        "sender_name": "George Harris",
        "sender_address": "2345 Birch Drive, Tinley Park, IL",
        "sender_phone": "555-3456",
        "sender_email": "georgeharris@example.com",
        "receiver_name": "Charlotte King",
        "receiver_address": "6789 Cedar Street, Oak Brook, IL",
        "receiver_phone": "555-6543",
        "receiver_email": "charlotteking@example.com",
        "shipment_name": "Appliances",
        "origin_placename": "Tinley Park, IL",
        "destination_placename": "Oak Brook, IL",
        "shipment_status": "In Transit",
        "created_at": "2025-02-13T11:45:00Z",
        "updated_at": "2025-02-14T14:30:00Z",
        "origin": {
            "latitude": 41.6033,
            "longitude": -87.7842
        },
        "destination": {
            "latitude": 41.8502,
            "longitude": -87.9607
        },
        "shipment_description": "Refrigerator and microwave",
        "shipment_image": "https://example.com/shipments/7.jpg",
        "shipment_weight": "50kg"
    },
    {
        "id": "8",
        "sender_name": "Barbara Lee",
        "sender_address": "9876 Ashwood Drive, Des Plaines, IL",
        "sender_phone": "555-2345",
        "sender_email": "barbaralee@example.com",
        "receiver_name": "Daniel Clark",
        "receiver_address": "2345 Maple Street, Lake Forest, IL",
        "receiver_phone": "555-7654",
        "receiver_email": "danielclark@example.com",
        "shipment_name": "Books",
        "origin_placename": "Des Plaines, IL",
        "destination_placename": "Lake Forest, IL",
        "shipment_status": "Delivered",
        "created_at": "2025-02-14T08:00:00Z",
        "updated_at": "2025-02-15T09:00:00Z",
        "origin": {
            "latitude": 42.0334,
            "longitude": -87.8941
        },
        "destination": {
            "latitude": 42.2328,
            "longitude": -87.8593
        },
        "shipment_description": "History books",
        "shipment_image": "https://example.com/shipments/8.jpg",
        "shipment_weight": "15kg"
    },
    {
        "id": "9",
        "sender_name": "Paul Walker",
        "sender_address": "1234 Willow Street, Oak Lawn, IL",
        "sender_phone": "555-9876",
        "sender_email": "paulwalker@example.com",
        "receiver_name": "Grace Adams",
        "receiver_address": "5678 Pinehill Road, Northbrook, IL",
        "receiver_phone": "555-5432",
        "receiver_email": "graceadams@example.com",
        "shipment_name": "Stationery",
        "origin_placename": "Oak Lawn, IL",
        "destination_placename": "Northbrook, IL",
        "shipment_status": "Pending",
        "created_at": "2025-02-15T10:30:00Z",
        "updated_at": "2025-02-16T11:00:00Z",
        "origin": {
            "latitude": 41.7256,
            "longitude": -87.7583
        },
        "destination": {
            "latitude": 42.1275,
            "longitude": -87.8137
        },
        "shipment_description": "Stationery items",
        "shipment_image": "https://example.com/shipments/9.jpg",
        "shipment_weight": "6kg"
    },
    {
        "id": "10",
        "sender_name": "Helen Adams",
        "sender_address": "8765 Elm Street, Orland Park, IL",
        "sender_phone": "555-1234",
        "sender_email": "helenadams@example.com",
        "receiver_name": "Mark Lewis",
        "receiver_address": "6789 Birch Road, Barrington, IL",
        "receiver_phone": "555-2345",
        "receiver_email": "marklewis@example.com",
        "shipment_name": "Furniture",
        "origin_placename": "Orland Park, IL",
        "destination_placename": "Barrington, IL",
        "shipment_status": "In Transit",
        "created_at": "2025-02-16T12:00:00Z",
        "updated_at": "2025-02-17T13:00:00Z",
        "origin": {
            "latitude": 41.6295,
            "longitude": -87.8522
        },
        "destination": {
            "latitude": 42.1491,
            "longitude": -88.1382
        },
        "shipment_description": "Dining table and chairs",
        "shipment_image": "https://example.com/shipments/10.jpg",
        "shipment_weight": "25kg"
    }
]


export const baseUrl = "http://localhost:3001/"

