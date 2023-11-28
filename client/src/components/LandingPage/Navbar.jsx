/* Mix Home and Navbar list */
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Check window width on mount and on window resize
  useEffect(() => {
    const handleResize = () => {
      // Hide mobile menu if window width is greater than or equal to 768px (adjust as needed)
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar flex justify-between items-center text-1xl text-center h-24 max-w-[1080px] px-4 text-white">
      <div className="pl-4 sm:pl-8 md:pl-13 lg:pl-20">
        <h2 className="text-3xl font-bold">
          BI<span className="text-red-600 font-bold">U</span>MS
        </h2>
      </div>

      {/* Large Screen Navigation */}
      <ul className="hidden md:flex items-center font-medium">
        <li className="p-4 hover:border-b-2 border-red-600 ">HOME</li>
        <li className="p-4 hover:border-b-2 border-red-600">ABOUT</li>
        <li className="p-4 hover:border-b-2 border-red-600">EVENTS</li>
        <li className="p-4 pb-6 md:pt-0 hover:border-b-2 border-red-600">
          MANAGE <br />
          HOUSEHOLD
        </li>
        <li className="p-4 hover:border-b-2 border-red-600">CONTACTS</li>
        <li className="p-4 hover:border-b-2 border-red-600">FEEDBACK</li>
      </ul>

      {/*Diri Log In Button kailangan unta pop up deritso LOG IN card modal */}
      <div>
        {/*Diri Log In Button kailangan unta pop up deritso LOG IN card modal */}
        {/*E link nlang pud ang register */}
        {/* <Register /> */}
      </div>

      {/* Small Screen Navigation */}
      <div onClick={handleNav} className="block md:hidden pb-3">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div
          className={`fixed left-0 top-0 w-[60%] h-full bg-black/80 backdrop-filter backdrop-blur-md ease-in-out duration-1000`}
        >
          <h2 className="text-3xl font-bold m-4 text-white pt-3">
            BI<span className="text-red-600 font-bold">U</span>MS
          </h2>

          <ul className="uppercase p-4">
            <li className="p-4 hover:text-red-600 hover:bg-gray-200 hover:rounded-md transition duration-100">
              Home
            </li>
            <li className="p-4 hover:text-red-600 hover:bg-gray-200 hover:rounded-md transition duration-100">
              About
            </li>
            <li className="p-4 hover:text-red-600 hover:bg-gray-200 hover:rounded-md transition duration-100">
              Events
            </li>
            <li className="p-4 md:pl-4 hover:text-red-600 hover:bg-gray-200 hover:rounded-md transition duration-100">
              Manage Household
            </li>
            <li className="p-4 hover:text-red-600 hover:bg-gray-200 hover:rounded-md transition duration-100">
              Contacts
            </li>
            <li className="p-4 hover:text-red-600 hover:bg-gray-200 hover:rounded-md transition duration-100">
              Feedback
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
