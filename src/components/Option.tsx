import React, { useState } from "react";
import correct from "../assets/correct.svg";
import Header from "./Header";

const Option = () => {
  const [active, setActive] = useState<Boolean>(false);
  return (
    <>
      <div className=" w-screen h-screen bg-white flex justify-center items-center">
        <div className="w-2/3 h-2/3  shadow-2xl flex  justify-center items-center gap-28 flex-col  ">
          <div className="flex gap-20">
            <div className="border-2 w-60 h-60 rounded flex items-end border-[#281564] border-gray-400 hover:scale-105 transition-all cursor-pointer ">
              <div className="w-60 h-20  bg-[#281564] bg-gray-400 flex justify-center items-center ">
                <div className="rounded-full w-8 h-8 bg-white  flex justify-center items-center">
                  <img
                    className="bg-[#281564] rounded-full w-7 h-7 p-2 hidden "
                    src={correct}
                  />
                </div>
              </div>
            </div>
            <div className="border-2 w-60 h-60 rounded flex items-end border-[#281564] hover:scale-105 transition-all cursor-pointer">
              <div className="w-60 h-20  bg-[#281564] flex justify-center items-center">
                <div className="rounded-full w-8 h-8 bg-white  flex justify-center items-center">
                  <img
                    className="bg-[#281564] rounded-full w-7 h-7 p-2 "
                    src={correct}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#281564]">Continue</button>
        </div>
      </div>
    </>
  );
};

export default Option;
