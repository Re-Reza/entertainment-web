import {createStore} from 'redux';
import rootReducer from './reducers';
import userInfoReducer from "./reducers/userInfoReducer";
import contentReducer from "./reducers/contentReducer";

const store = createStore(rootReducer);

export default store;