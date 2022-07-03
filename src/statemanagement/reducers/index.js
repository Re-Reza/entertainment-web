import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import contentReducer from "./contentReducer";

export default combineReducers({
    userState : userInfoReducer, 
    contentState : contentReducer,
});