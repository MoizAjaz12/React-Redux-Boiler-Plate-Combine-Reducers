import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
    adminReducer,
    userReducer
})