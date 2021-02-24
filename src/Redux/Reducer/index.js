import { combineReducers } from "redux";
import taskReducer from "./ListTask";
const rootReducer = combineReducers({ taskReducer });
export default rootReducer;
