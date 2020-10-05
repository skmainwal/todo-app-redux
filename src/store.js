import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import myReducer from "./reducers";

const store = createStore(myReducer, composeWithDevTools());

export default store;
