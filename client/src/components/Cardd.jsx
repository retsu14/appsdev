import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deleteBarangayOfficial } from "../features/barangayOfficials/barangaySlice";

const Cardd = ({ barangayofficial }) => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative w-[15rem] bg-white border shadow-md border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700x">
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          onClick={toggleDropdown}
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>

        <div
          id="dropdown"
          className={`absolute right-3 mt-10 ${
            isDropdownOpen ? "block" : "hidden"
          } z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="flex gap-1 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <FaEye className="w-[20px] h-[20px]" />
                View
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <FaRegEdit className="w-[20px] h-[20px]" />
                Edit
              </a>
            </li>
            <li>
              <button
                onClick={() =>
                  dispatch(deleteBarangayOfficial(barangayofficial._id))
                }
                className="w-full flex gap-1 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <FaTrashAlt className="w-[20px] h-[20px]" />
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <FaUserCircle className="w-24 h-24 mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {barangayofficial.fname} {barangayofficial.lname}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {barangayofficial.position}
        </span>
        <div className="flex mt-4 md:mt-6 gap-10">
          <div className="text-sm flex flex-col gap-2">
            Status:
            <div className="flex justify-center">
              {barangayofficial.isActive === "ACTIVE" ? (
                <GrStatusGoodSmall className="text-green-500" />
              ) : (
                <GrStatusGoodSmall className="text-red-500" />
              )}
            </div>
          </div>
          <div className="text-sm flex flex-col gap-2">
            Age:
            <div className="text-center">{barangayofficial.age}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
