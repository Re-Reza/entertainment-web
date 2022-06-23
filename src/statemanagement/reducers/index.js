import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import contentReducer from "./contentReducer";
import categorizeReducer from "./categorizeReducer";

export default combineReducers({
    userState : userInfoReducer, 
    contentState : contentReducer,
    categorizeState : categorizeReducer
});