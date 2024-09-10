import { createStore, combineReducers, applyMiddleware } from "redux";
import{ thunk} from "redux-thunk";
import userReducer from "/src/components/users/userReducer.js";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
