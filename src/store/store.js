import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { loginReducer } from "../reducers/loginReducer";
import { signupReducer } from "../reducers/signupReducer";

const reducers = combineReducers({
  loginReducer,
  signupReducer,
});

const middleware = [thunk, promise];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
