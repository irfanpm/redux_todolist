import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todo";

export const store = configureStore({
    reducer:{
        todo:todoreducer,
    }


})