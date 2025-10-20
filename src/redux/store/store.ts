import { configureStore } from "@reduxjs/toolkit";
import featuresSlice from "../slices/featuresSlice";
import blogsSlice from "../slices/blogsSlice";
import testimonialSlice from "../slices/testimonialSlice";
import pricingSlice from "../slices/pricingSlice";
import companySlice from "../slices/companySlice";
import teamSlice from "../slices/teamSlice";
import howSlice from "../slices/howSlice";
import faqSlice from "../slices/faqSlice";
export const store = configureStore({
  reducer: {
    features: featuresSlice,
    blogs: blogsSlice,
    test: testimonialSlice,
    price: pricingSlice,
    company: companySlice,
    team: teamSlice,
    how: howSlice,
    faq: faqSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
