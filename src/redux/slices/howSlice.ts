import { createSlice } from "@reduxjs/toolkit";
import HowIcon1 from "../../assets/images/HowIcon1.svg";
import HowIcon2 from "../../assets/images/HowIcon2.svg";
import HowIcon3 from "../../assets/images/HowIcon3.svg";
import HowIcon4 from "../../assets/images/HowIcon4.svg";
import HowIcon5 from "../../assets/images/HowIcon5.svg";
import HowIcon6 from "../../assets/images/HowIcon6.svg";
import HowIcon7 from "../../assets/images/HowIcon7.svg";
import HowIcon8 from "../../assets/images/HowIcon8.svg";
import HowIcon9 from "../../assets/images/HowIcon9.svg";
import HowIcon10 from "../../assets/images/HowIcon10.svg";
export interface How {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: How[] = [
  {
    id: 1,
    title: "Initial Consultation",
    desc: "We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements.",
    image: HowIcon1,
  },
  {
    id: 2,
    title: "Assessing Your Needs",
    desc: "Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.",
    image: HowIcon2,
  },
  {
    id: 3,
    title: "Personalized Nutrition Plan",
    desc: "Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing.",
    image: HowIcon3,
  },
  {
    id: 4,
    title: "Meal Planning and Recipes",
    desc: "To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.",
    image: HowIcon4,
  },
  {
    id: 5,
    title: "Ongoing Support",
    desc: "Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you stay motivated and achieve long-term success.",
    image: HowIcon5,
  },
  {
    id: 6,
    title: "Progress Tracking",
    desc: "We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture of your progress and make any necessary adjustments.",
    image: HowIcon6,
  },
  {
    id: 7,
    title: "Regular Check-ins",
    desc: "We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes.",
    image: HowIcon7,
  },
  {
    id: 8,
    title: "Education and Resources",
    desc: "Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle.",
    image: HowIcon8,
  },
  {
    id: 9,
    title: "Fine-Tuning and Adjustments",
    desc: "As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs.",
    image: HowIcon9,
  },
  {
    id: 10,
    title: "Sustainable Lifestyle Habits",
    desc: "Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program.",
    image: HowIcon10,
  },
];

const howSlice = createSlice({
  name: "how",
  initialState,
  reducers: {},
});

export default howSlice.reducer;
