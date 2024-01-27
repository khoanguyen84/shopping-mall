import { legacy_createStore as createStore } from "redux"
import rootReducer from "../reducers/rootReducer"
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhencer = composeWithDevTools()
const store = createStore(rootReducer, composeEnhencer)
export default store;