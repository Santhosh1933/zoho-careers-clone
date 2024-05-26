import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const Jobpage = () => {
  const JobCard = (props) => {
    return (
      <div className="bg-white p-4 pb-8 group border cursor-pointer ease-in-out  duration-300 hover:border-[#056cb8] rounded-sm hover:shadow-md hover:-translate-y-1">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <h1 className="py-3 text-[#056cb8] font-medium text-lg sm:text-xl">
              {props.title}
            </h1>
            <p className=" line-clamp-3 ">{props.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#049949]">{props.type}</p>
            <div className="group-hover:block transition-all hidden">
              <FaArrowRight className="text-gray-500 group-hover:translate-x-1"/>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#f6f9fd]">
      <div className="container py-16">
        <h1 className="text-3xl sm:w-3/4 font-[400] mx-auto text-center">
          Some opportunities for you to explore
        </h1>
        <div className="py-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
          <JobCard
            title={"WEB DEVELOPERS"}
            description={
              "Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization "
            }
            type={"Full time"}
          />
        </div>
      </div>
    </div>
  );
};
