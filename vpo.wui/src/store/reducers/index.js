import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import customerReducer from "./customerReducer";
import supplierReducer from "./supplierReducer";
import paymentReducer from "./paymentReducer";

const rootReducer = combineReducers({
  userReducer,
  roleReducer,
  securityReducer,
  modalReducer,
  customerReducer,
  supplierReducer,
  paymentReducer,

});

export default rootReducer;
