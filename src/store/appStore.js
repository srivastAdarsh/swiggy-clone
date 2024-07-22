import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/Cart/cartSlice"

const appStore = configureStore({
    //This is the reducer for the whole app, meaning it will have different reducer for diff slices of the store
    reducer : {
        cart : cartReducer,
        // user : cartReducer
    }
})

export default appStore;