/* Intro for Home */
import React from "react";

const Hero = () => {
  return (
    <div className="intro-container p-7 md:p-20 text-white">
      <div className="intro-content pt-4 md:pt-11 p-2 sm:p-1">
        <h1 className="text-3xl md:text-5xl font-bold">WELCOME TO</h1>
        <h1 className="text-3xl md:text-5xl font-bold">
          BARANGAY IBABAO, CORDOVA, CEBU
        </h1>
        <div className="pt-3 sm:pt-5">
          <p className="text-sm sm:text-base">Ibabao Barangay Hall</p>
          <p className="text-sm sm:text-base">
            Open Hours of Barangay: Monday to Friday (8am - 5pm)
          </p>
          <p className="text-sm sm:text-base">Brgyibabao@gmail.com/2023-1003</p>
        </div>
        <div className="p-4 sm:p-10 pt-2">
          <button className="bg-white font-bold text-red-500 px-2 sm:px-4 py-1 sm:py-2 mt-1 rounded-3xl hover:bg-blue-500 hover:text-white focus:outline-none">
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
