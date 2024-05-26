import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export const RegisterBanner = () => {
  return (
    <div className="pt-12 pb-8 border-b">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl leading-[2.5rem] xl:w-[70%] mx-auto md:text-5xl font-medium text-center">
          Can’t find what you’re looking for?
        </h1>
        <p className="text-[#333] text-center py-4 text-lg font-medium mx-auto">
          Register on our Candidate Portal and get notified when new roles that
          match your skills open up.
        </p>
        <div className="w-fit mx-auto py-4 group">
          <button className="bg-[#f60014] flex items-center gap-4 px-6 rounded-sm  py-3 text-white font-medium">
            REGISTER HERE
            <FaAngleRight className="group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};
