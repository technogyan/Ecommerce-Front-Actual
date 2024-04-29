import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './CartSlice'
import DataReducer from "./DataReducer";


const store=configureStore({
    reducer:{
        cart:cartreducer,
        Alldata:DataReducer,
    }
})

export default store;