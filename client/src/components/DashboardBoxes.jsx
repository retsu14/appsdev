import React, { useRef, useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { MdPets, MdElderly } from "react-icons/md";
import { PiAlienFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaWheelchair } from "react-icons/fa";

function DashboardBoxes() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-4 m-4 " ref={containerRef}>
      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <FaPeopleGroup className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Population</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL POPULATION</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>

      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <IoMdMale className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Male</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL MALE</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>

      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <IoMdFemale className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Female</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL FEMALE</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>

      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <MdPets className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Pets Cats/Dog</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL PETS CATS/DOG</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>

      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <FaPeopleGroup className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Registered Voters</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL REGISTERED VOTERS</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>

      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <PiAlienFill className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Non-Registered Voters</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL NON-REGISTERED VOTERS</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>

      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <IoLocationSharp className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Purok</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL PUROK</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>

      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <FaWheelchair className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">PWD'S</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL PWD'S</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-12 ml-2">
          <MdElderly className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start h-full ">
            <strong className="mb-2 ">Senior Citizen</strong>
            <div className="flex items-center justify-center ">
              <strong className="ml-8 text-5xl">0</strong>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-2 border-gray-400 justify-end ">
          <p className="text-xs">TOTAL SENIOR CITIZEN</p>
        </div>

        <button
          type="button"
          className="flex items-center ml-28 justify-end hover:bg-gray-200 p-2  rounded "
        >
          <GrView className="mr-4" />
          <p className="">View </p>
        </button>
      </BoxWrapper>
    </div>
  );
}

export default DashboardBoxes;

function BoxWrapper({ children }) {
  return (
    <div className="bg-gray-300 rounded-sm p-6 aspect-w-1 aspect-h-1">
      {children}
    </div>
  );
}
