import { createSlice } from "@reduxjs/toolkit";
import TeamImg1 from "../../assets/images/team1.png";
import TeamImg2 from "../../assets/images/team2.png";
import TeamImg3 from "../../assets/images/team3.png";
import TeamImg4 from "../../assets/images/team4.png";

export interface Team {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Team[] = [
  {
    id: 1,
    title: "Sarah Mitchell",
    desc: "Founder and CEO",
    image: TeamImg1,
  },
  {
    id: 2,
    title: "Emily Thompson",
    desc: "Chief Operating Officer",
    image: TeamImg2,
  },
  {
    id: 3,
    title: "John Davis",
    desc: "Chief Financial Officer",
    image: TeamImg3,
  },
  {
    id: 4,
    title: "Rachel Adams",
    desc: "Chief Marketing Officer",
    image: TeamImg4,
  },
];

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
});

export default teamSlice.reducer;
