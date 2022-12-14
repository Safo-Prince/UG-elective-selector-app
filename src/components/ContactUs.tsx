import React from "react";
import Header from "./Header";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="bg-white relative z-40  w-screen h-screen flex  justify-center flex-col-2 mt-60">
        <div className="px-4">
          <h1 className="text-2xl font-bold mb-5">Contact us</h1>
          <h2 className="text-xs font-bold max-w-lg ">
            Need to get in touch with us? Fill out the form with your enquires
            and we would contact you immediately.
          </h2>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <input
            placeholder="Full Name"
            className="border-2  mt-1 h-14 rounded-lg  bg-white b-20 px-4"
            type="text "
          />

          <input 
            placeholder="Full Name"
            className="border-2  h-14  px-4"
            type="text"
          />

          <input
            placeholder="Message..."
            className="border-2  h-36 mx-30  px-4"
            type="text"
          />
          <button className="w-20 bg-[#281564] text-white"> Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
