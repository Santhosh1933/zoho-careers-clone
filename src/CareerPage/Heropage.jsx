import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export const Heropage = () => {
  return (
    <div>
      <div className="container pt-8">
        <p className="text-3xl sm:text-4xl leading-[2.5rem] xl:w-[70%] mx-auto md:text-5xl font-medium text-center">
          We’re more than just a workplace. We’re a family.
        </p>
        <p className="text-[#333] text-center py-4 text-lg font-medium xl:w-2/4 mx-auto">
          We know that finding a meaningful and rewarding career can be a long
          journey. Our goal is to make that process easy for you and to create a
          work environment that's enriching—one that you'll look forward to
          every day.
        </p>
        <div className="w-fit mx-auto py-4 group">
          <button className="bg-[#f60014] flex items-center gap-2 px-6 rounded-sm  py-3 text-white font-medium">
            VIEW OPEN ROLES
            <FaAngleRight className="group-hover:translate-x-1 transition-all" />
          </button>
        </div>
        <img
          src="https://www.zohowebstatic.com/sites/zweb/images/careers/zh-cw-career-banner.svg"
          alt=""
          className="w-full pt-8"
        />
      </div>
    </div>
  );
};
