import React from "react";
import Header from "./Header";
import { ArrowRight } from "phosphor-react";
import Footer from "./Footer";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#efefef] h-[75vh] w-[100vw] flex items-center justify-center relative">
        <div className="w-3/4 bg-white h-3/4   shadow-sm border-2 rounded  flex items-center justify-center flex-col">
          <img
            className="h-44 w-96 mb-10"
            src="https://ugelectiveshelper.netlify.app/assets/img/undraw_team_collaboration_re_ow29.svg"
            alt=""
          />
          <div className=" flex items-center justify-center flex-col">
            <h1 className="text-sm font-bold mb-4">FIND YOUR PATH</h1>
            <h1 className="text-2xl font-bold">
              Which Elective Course is Right for You?
            </h1>
            <p className="text-center px-7 font-medium">
              With not less than two elective courses available for students to
              enroll in each semester, it’s imperative to find and know which is
              right for you. This is why we have a created this pool of
              questions survey to match you with the perfect elective course
              based on your interest and skills.
            </p>
          </div>
          <button className="mt-12  text-white bg-[#281564] ">
            Get Started
            <ArrowRight
              className="inline ml-2 font-bold"
              size={16}
              weight="bold"
            />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
