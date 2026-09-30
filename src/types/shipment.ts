export type CargoType = 'standard' | 'fragile' | 'hazardous' | 'refrigerated';
export type VehicleType = 'sedan' | 'minivan' | 'van' | 'truck' | 'refrigerated_truck';
export type ShipmentStatus = 'pending' | 'assigned' | 'in_transit' | 'delivered' | 'cancelled';

export interface Location {
  address: string;
  city: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Shipment {
  id: string;
  title: string;
  cargoType: CargoType;
  weightKg: number;
  pickupLocation: Location;
  deliveryLocation: Location;
  pickupDate: string;
  requiredVehicle: VehicleType;
  status: ShipmentStatus;
  ownerId: string;
  driverId?: string;
  insurance: boolean;
  notes?: string;
  createdAt: string;
}

export interface BookingRequest {
  shipmentId: string;
  driverId: string;
  offeredPrice?: number;
  status: 'pending' | 'accepted' | 'rejected';
}