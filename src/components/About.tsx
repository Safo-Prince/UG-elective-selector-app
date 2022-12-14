import React from "react";
import Card from "./Card";
import Header from "./Header";

const About = () => {
  const details: { name: string; role: string; description: string }[] = [
    {
      name: "Richard",
      role: " PROJECT HEAD",
      description:
        "Seriously determined young man. With the passion to develop the nation through technology",
    },
    {
      name: "Rashid Kebiru",
      role: "SYSTEM ANALYST",
      description:
        "A smart young gentleman, pious and dependable with an innovative mind",
    },
    {
      name: "Bernard Berko",
      role: "SYSTEM TESTER",
      description:
        "Well developed in the field of IT and still developing more extraodinary skills",
    },
    {
      name: "Emmanuel Brew",
      role: "DOCUMENTATION SPECIALIST",
      description:
        "A focused young man who always sees the a project is done to it's atmost best, and brings the best out others",
    },
  ];
  return (
    <div >
      <Header />
      <div>
        <div className=" h-[800px] w-full   brightness-50 ">
          <img
            className="object-fit"
            src="https://ugelectiveshelper.netlify.app/assets/img/Internet_Business_Technology.jpg"
          />
        </div>
        <div className="h-[900px]  bg-white absolute flex  items-center flex-col px-20 w-full  text-gray-600 pt-40">
          <h1 className="text-sm font-bold">OUR MISSION</h1>
          <p className="text-[12px] font-bold">
            This initiative attempts to assist computer science students in
            determining their career route and right elective course in
            technology. We empower people to change the world with data.This is
            the core mission that drives everything we do, and how we do it.
          </p>
          
        </div>
      </div>
      <Card />
          <Card />
    </div>
  );
};

export default About;
