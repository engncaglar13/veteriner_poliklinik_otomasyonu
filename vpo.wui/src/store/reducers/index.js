import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import appointmentReducer from "./appointmentReducer";
import petReducer from "./petReducer";

const rootReducer = combineReducers({
    userReducer,
    roleReducer,
    securityReducer,
    modalReducer,
    appointmentReducer,
    petReducer,
    
  });
  
  export default rootReducer;
  