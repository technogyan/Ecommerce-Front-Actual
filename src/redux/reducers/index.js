import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

const Reducer=combineReducers({
    allProducts:ProductReducer,
})