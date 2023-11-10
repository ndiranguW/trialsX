import { configureStore } from "@reduxjs/toolkit";
import collapsibleReducer from "./features/collapsibleSlice";

export const store = configureStore({
  reducer: {
    collapsibleReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
