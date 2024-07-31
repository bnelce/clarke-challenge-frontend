import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import supplierReducer from "./slices/supplier";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  supplier: supplierReducer,
});

export { rootPersistConfig, rootReducer };
