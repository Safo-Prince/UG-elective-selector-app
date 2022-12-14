import React, { useContext, useEffect, useState } from "react";
import { Link, useRevalidator } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Header = () => {
  const [id, setId] = useState(localStorage.getItem("UserID"));
  const { identificationNumber }: any = useContext(UserContext);
  const userID: string = identificationNumber?.current?.value;
  userID ? localStorage.setItem("UserID", userID) : "";

  useEffect(() => {
    userID ? localStorage.setItem("UserID", userID) : "";
  }, []);

  const navigate = useNavigate();
  return (
    <div className=" w-screen h-44  pt-0 relative z-20 ">
      <div className="bg-[#281564] flex h-24 items-center text-white">
        <img
          className="h-20 w-20 ml-36 mr-10 "
          src="https://ugelectiveshelper.netlify.app/assets/img/logo.png"
          alt="logo"
        />

        <div className="mr-20 font-semibold">
          <h1 className="text-bold text-sm ml-[10px] ">UNIVERSITY OF GHANA</h1>
          <h2 className="text-bold text-xs ">ELECTIVES SELECTION HELPER</h2>
        </div>
        <ul className="flex gap-5 ">
          <Link
            className="text-white font-bold text-sm hover:text-white"
            to="/home"
          >
            <li>HOME </li>
          </Link>
          <Link
            className="text-white font-bold text-sm  hover:text-white"
            to="/aboutus"
          >
            <li>ABOUT US </li>
          </Link>
          <Link
            className="text-white font-bold text-sm  hover:text-white"
            to="/contactus"
          >
            <li>CONTACT US</li>
          </Link>
        </ul>
      </div>
      <div className="w-screen bg-[#f7f7f7] h-28 flex items-center">
        <img
          className="h-14 w-16"
          src="https://ugelectiveshelper.netlify.app/assets/img/profile-picture-circle-hd.png"
        />
        <span className="text-black font-bold ml-2">{id}</span>
        <button
          onClick={() => navigate("/")}
          type="button"
          className=" text-[#007bff] hover:border-none focus:outline-none hover:underline"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Header;
