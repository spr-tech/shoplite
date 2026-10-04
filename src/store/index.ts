// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";
import { logger, saveCart } from "./middleware";

export const store = configureStore({
  reducer: {
    cart: cartReducer, //   → state.cart
    theme: themeReducer, // → state.theme
    user: userReducer, //   → state.user
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, saveCart),
});

export type RootState = ReturnType<typeof store.getState>;
