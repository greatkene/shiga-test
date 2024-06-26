export interface UserProfile {
  email?: string;
  first_name?: string;
  last_name?: string;
}

export interface Transaction {
  id: number;
  description: string;
  amount: string;
  date: string;
}
