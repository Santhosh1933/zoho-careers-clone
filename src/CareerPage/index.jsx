import React from "react";
import { Navbar } from "./Navbar";
import { Heropage } from "./Heropage";
import { Jobpage } from "./Jobpage";
import { RegisterBanner } from "./RegisterBanner";
import { Copyright } from "./Copyright";

export const CareersPage = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Jobpage />
      <RegisterBanner />
      <Copyright />
    </div>
  );
};
