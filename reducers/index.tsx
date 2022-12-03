import CounterReducer from "./Counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter:CounterReducer,
})

export default allReducers;