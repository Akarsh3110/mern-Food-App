import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./menu-slice"
import menuItemSlice from "./menuItem-slice"

const store=configureStore({
    reducer:{
        menu:menuSlice,
        menuItem:menuItemSlice
    }
})


export default store;