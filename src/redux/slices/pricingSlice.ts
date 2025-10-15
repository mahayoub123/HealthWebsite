import { createSlice } from "@reduxjs/toolkit";
export interface Pricing {
  id: number;
  title: string;
  desc: string;
  price: string;
}

const initialState: Pricing[] = [
  {
    id: 1,
    title: "Basic Plan",
    price: "49$",
    desc: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
  },
  {
    id: 2,
    title: "Premium Plan",
    price: "79$",
    desc: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
  },
  {
    id: 3,
    title: "Ultimate Plan",
    price: "99$",
    desc: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
  },
];

const pricingSlice = createSlice({
  name: "price",
  initialState,
  reducers: {},
});

export default pricingSlice.reducer;
