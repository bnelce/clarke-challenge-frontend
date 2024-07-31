import { createSlice } from "@reduxjs/toolkit";
// utils
//
import { Supplier, SupplierState } from "@/@types/Supplier";
import { useQuery } from "@apollo/client";
import { GET_SUPPLIERS_BY_CONSUMPTION } from "@/hooks/get-suppliers-by-consumption/queries";
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState: SupplierState = {
  isLoading: false,
  error: null,
  supplierByConsumptionList: [] as Supplier[],
};

const slice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // GET SUPPLIERS
    getSuppliersSuccess(state, action) {
      state.supplierByConsumptionList = action.payload;
      state.isLoading = false;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
//

// ----------------------------------------------------------------------

export function getSuppliersByConsumption(value: number) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = useQuery(GET_SUPPLIERS_BY_CONSUMPTION, {
        variables: { consumption: value },
      });
      console.log(data);
      dispatch(slice.actions.getSuppliersSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
