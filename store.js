import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./Slices/navSlice";

export default store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
