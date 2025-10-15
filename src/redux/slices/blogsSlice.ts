import { createSlice } from "@reduxjs/toolkit";
import blogImg1 from "../../assets/images/img1.png";
import blogImg2 from "../../assets/images/img2.png";
import blogImg3 from "../../assets/images/img3.png";
import blogImg4 from "../../assets/images/img4.png";
export interface Blog {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Blog[] = [
  {
    id: 1,
    title: "The Benefits of Hydration for Weight Loss",
    desc: "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    image: blogImg1,
  },
  {
    id: 2,
    title: "Cultivating a Healthy Relationship with Food",
    desc: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
    image: blogImg2,
  },
  {
    id: 3,
    title: "Carbohydrates, Proteins, and Fats",
    desc: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    image: blogImg3,
  },
  {
    id: 4,
    title: "Quick and Nutritious Options",
    desc: "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    image: blogImg4,
  },
];

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
});

export default blogsSlice.reducer;
