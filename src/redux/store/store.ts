import { configureStore } from "@reduxjs/toolkit";
import featuresSlice from "../slices/featuresSlice";
import blogsSlice from "../slices/blogsSlice";
import testimonialSlice from "../slices/testimonialSlice";
import pricingSlice from "../slices/pricingSlice";
export const store = configureStore({
  reducer: {
    features: featuresSlice,
    blogs: blogsSlice,
    test: testimonialSlice,
    price: pricingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
