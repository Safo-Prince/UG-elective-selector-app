import React, { useEffect, useState } from "react";
const Login = () => {
  const [user, setUserName] = useState("Student ID");

  return (
    <div className="w-screen h-screen flex  justify-center bg-white pt-20 ">
      <div className="flex flex-col shadow-2xl w-3/6 h-4/6 rounded  ">
        <header className="w-full h-28   flex items-center justify-center bg-[#281564] rounded ">
          <img
            className="h-20 w-20 "
            src="https://ugelectiveshelper.netlify.app/assets/img/logo.png"
            alt="logo"
          />
          <h1 className="text-2xl font-bold"> UG ELECTIVES HELPER</h1>
        </header>
        <div className=" flex justify-center mt-4 flex-col items-center">
          <div className=" flex justify-center ">
            <button
              autoFocus
              onClick={() => setUserName("Student ID")}
              type="button"
              className="mr-4 w-80 text-[#281564] focus:text-white focus:bg-[#281564] focus:outline-none hover:border-none"
            >
              STUDENT
            </button>
            <button
              onClick={() => setUserName("Staff ID")}
              type="button"
              className=" w-80  text-[#281564]  focus:text-white focus:bg-[#281564]  focus:outline-none hover:border-none "
            >
              STAFF
            </button>
          </div>
          <div className="bg-[#f7f7f7]  w-3/4 h-60 flex justify-center items-center mt-4 flex-col group">
            <form className="  text-[#281564]">
              <label className="font-bold text-xs">{user}</label>
              <br />
              <input
                className=" mt-1 mb-4 w-96 h-10 rounded-lg border-2 bg-white  px-4"
                type="text"
                name="id"
                required
              />
              <br />
              <label className="font-bold text-xs">PIN:</label>
              <br />
              <input
                className="w-96 mt-1 h-10 rounded-lg border-2 bg-white nb-20 px-4"
                type="password"
                name="id"
                required
              />
              <br />
              <button className="mt-4 text-white bg-[#281564] rounded-lg ml-36">
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
