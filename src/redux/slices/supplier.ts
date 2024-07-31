import { createSlice } from "@reduxjs/toolkit";
// utils
//
import { Supplier, SupplierState } from "@/@types/Supplier";
import { GET_SUPPLIERS_BY_CONSUMPTION } from "@/hooks/get-suppliers-by-consumption/queries";
import { dispatch } from "../store";
import client from "@/apollo/client";

// ----------------------------------------------------------------------

const initialState: SupplierState = {
  loading: false,
  error: null,
  data: [] as Supplier[],
};

const slice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.loading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    // GET SUPPLIERS
    getSuppliersSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
//

// ----------------------------------------------------------------------

export function getSuppliersByConsumption(consumption: string) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await client.query({
        query: GET_SUPPLIERS_BY_CONSUMPTION,
        variables: { consumption: Number(consumption) },
      });

      const suppliersData = data.suppliers.map(
        (supplier: {
          id: number;
          name: string;
          logo: string;
          state: string;
          cost_per_kwh: number;
          min_kwh: number;
          total_clients: number;
          average_rating: number;
        }) => {
          return {
            id: supplier.id,
            name: supplier.name,
            logo: supplier.logo,
            state: supplier.state,
            costPerKwh: supplier.cost_per_kwh,
            minKwh: supplier.min_kwh,
            totalClients: supplier.total_clients,
            averageRating: supplier.average_rating,
          };
        }
      );

      dispatch(slice.actions.getSuppliersSuccess(suppliersData));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
