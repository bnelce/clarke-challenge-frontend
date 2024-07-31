export type Supplier = {
  id: number;
  name: string;
  logo: string;
  state: string;
  costPerKwh: number;
  minKwh: number;
  totalClients: number;
  averageRating: number;
};

export type SupplierState = {
  loading: boolean;
  error: string | null;
  data: Supplier[];
};
