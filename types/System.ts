import { Role } from "@/utils/roles";

export interface UserType {
id:number;
name:string;
email:string;
password:string;
role:Role,
phone:string;
address:string;
about:string;
profilePic:string;
createdAt:string;
updatedAt:string
}
export interface DriverType {
    id: number;
    vehicleId: number;
    user:UserType
}

export interface OfficerType{
    id:number;
    user:UserType
}
// "id": 4,
// "vehicleId": "BCG4567",
// "user": {
//     "id": 8,
//     "name": "Samuel",
//     "email": "samuel@gmail.com",
//     "password": "$2b$10$JG7guTtyeiYkpFxG/mfWu.eTSFZQqGUYlhecL24PeP8VpZY2bnvhG",
//     "role": "driver",
//     "phone": "+250727830909",
//     "address": null,
//     "about": null,
//     "profilePic": null,
//     "createdAt": "2025-04-25T06:01:39.943Z",
//     "updatedAt": "2025-04-25T06:01:39.943Z"
// },