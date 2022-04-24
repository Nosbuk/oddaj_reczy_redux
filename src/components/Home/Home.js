import React from "react";
import { HomeHeader } from "./HomeHeader";
import { HomeStats } from "./HomeStats";
import { HomeSteps } from "./HomeSteps";
import { HomeAbout } from "./HomeAbout";
import { HomeContact } from "./HomeContact";
export const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeStats />
      <HomeSteps />
      <HomeAbout />
      <HomeContact />
    </div>
  );
};
