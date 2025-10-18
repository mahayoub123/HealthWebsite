import { createSlice } from "@reduxjs/toolkit";
import CardIcon from "../../assets/images/Icon Container.svg";
import CardIcon2 from "../../assets/images/Icon Container2.svg";
import CardIcon3 from "../../assets/images/Icon Container3.svg";
import CardIcon4 from "../../assets/images/Icon Container4.svg";

export interface Company {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Company[] = [
  {
    id: 1,
    title: "10,000+ Transformations",
    desc: "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.",
    image: CardIcon,
  },
  {
    id: 2,
    title: "Recognition for Excellence",
    desc: "Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.",
    image: CardIcon2,
  },
  {
    id: 3,
    title: "Positive Client Reviews",
    desc: "We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.",
    image: CardIcon3,
  },
  {
    id: 4,
    title: "Collaborate With Top Health Experts.",
    desc: "Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.",
    image: CardIcon4,
  },
];

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
});

export default companySlice.reducer;
