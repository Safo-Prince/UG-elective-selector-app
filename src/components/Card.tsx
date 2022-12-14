import React from "react";

const Card = () => {
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
    <div className="h-[65vh] w-screen">
      <div className=" shadow-2xl  h-[650px] w-[550px] absolute z-20">
        <img
          className="h-20 w-20"
          src="https://ugelectiveshelper.netlify.app/assets/img/profile-picture-circle-hd.png"
          alt="avatar"
        />
        <h1> Richard</h1>
        <p>
          Seriously determined young man. With the passion to develop the nation
          through technology
        </p>
      </div>
    </div>
  );
};

export default Card;
