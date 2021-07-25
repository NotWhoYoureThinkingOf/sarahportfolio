import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import menuOpenReducer from "../features/menuOpenSlice";
import categoryReducer from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menuOpen: menuOpenReducer,
    category: categoryReducer,
  },
});
