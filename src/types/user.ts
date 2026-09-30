export type UserRole = 'individual' | 'company' | 'driver';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  companyName?: string;
  companyId?: string;
  createdAt: string;
}