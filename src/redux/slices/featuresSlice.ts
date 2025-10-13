import { createSlice } from "@reduxjs/toolkit";
import CardIcon from "../../assets/images/Icon Container.svg";
import CardIcon2 from "../../assets/images/Icon Container2.svg";
import CardIcon3 from "../../assets/images/Icon Container3.svg";
import CardIcon4 from "../../assets/images/Icon Container4.svg";
import CardIcon5 from "../../assets/images/Icon Container5.svg";
import CardIcon6 from "../../assets/images/Icon Container6.svg";
export interface Feature {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Feature[] = [
  {
    id: 1,
    title: "Personalized Nutrition Plans",
    desc: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
    image: CardIcon,
  },
  {
    id: 2,
    title: "Food Tracking and Analysis",
    desc: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
    image: CardIcon2,
  },
  {
    id: 3,
    title: "Lifestyle and Behavior Coaching",
    desc: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
    image: CardIcon3,
  },
  {
    id: 4,
    title: "Guidance from Certified Nutritionists",
    desc: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
    image: CardIcon4,
  },
  {
    id: 5,
    title: "Meal Planning and Recipes",
    desc: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
    image: CardIcon5,
  },
  {
    id: 6,
    title: "Nutritional Education and Workshops",
    desc: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
    image: CardIcon6,
  },
];

const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {},
});

export default featuresSlice.reducer;
