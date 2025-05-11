import { UUIDTypes } from "uuid";

export interface arconds {
  id?: UUIDTypes
  responsible: string
  sector: string
  brand: string
  capacity: string
  gas_type: string
  servie_type: string
  technical: string
  nextmaintenance: string 
  status: string
}

export interface users {
  id?: UUIDTypes
  name: string
  email: string
  password: string
  role: string
  created_at: string
}


