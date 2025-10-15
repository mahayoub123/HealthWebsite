import { createSlice } from "@reduxjs/toolkit";

export interface Test {
  id: number;
  desc: string;
}

const initialState: Test[] = [
  {
    id: 1,
    desc: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
  },
  {
    id: 2,
    desc: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
  },
  {
    id: 3,
    desc: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
  },
];

const testimonialSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

export default testimonialSlice.reducer;
