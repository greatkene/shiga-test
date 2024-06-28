export interface UserProfile {
  email?: string;
  first_name?: string;
  last_name?: string;
  balance: number;
}

export interface Transaction {
  [x: string]: any;
  id: number;
  description: string;
  amount: string;
  date: string;
  source: string;
}
