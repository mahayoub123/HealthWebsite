import { configureStore } from "@reduxjs/toolkit";
import featuresSlice from "../slices/featuresSlice";

export const store = configureStore({
  reducer: {
    features: featuresSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
