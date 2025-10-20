import { createSlice } from "@reduxjs/toolkit";

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const initialState: FAQ[] = [
  {
    id: 1,
    question: "What is personalized nutrition coaching?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    id: 2,
    question: "How can nutrition coaching help me lose weight?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    id: 3,
    question: "Can I still enjoy my favorite foods while on a nutrition plan?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    id: 4,
    question: "How often will I have contact with my nutritionist?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    id: 5,
    question: "How long will it take to see results?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    id: 6,
    question:
      "Are the meal plans and recipes provided suitable for vegetarians or vegans?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
];

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
});

export default faqSlice.reducer;
