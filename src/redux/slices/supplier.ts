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

export function getSuppliersByConsumption(consumption: number) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await client.query({
        query: GET_SUPPLIERS_BY_CONSUMPTION,
        variables: { consumption },
      });
      console.log(data);
      dispatch(slice.actions.getSuppliersSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
