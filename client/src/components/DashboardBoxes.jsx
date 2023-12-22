import React, { useRef, useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { MdPets, MdElderly } from "react-icons/md";
import { PiAlienFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaWheelchair } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RiParentFill } from "react-icons/ri";

function DashboardBoxes() {
  const containerRef = useRef();
  const { residents, gender } = useSelector((state) => state.residents);
  const maleCount = residents.filter(
    (resident) => resident.gender === "MALE"
  ).length;
  const femaleCount = residents.filter(
    (resident) => resident.gender === "FEMALE"
  ).length;
  const others = residents.filter(
    (resident) => resident.gender === "OTHERS"
  ).length;
  const petcount = residents.filter((resident) => resident.pet).length;
  const votercount = residents.filter(
    (resident) => resident.registeredvoter === "YES"
  ).length;
  const votercount1 = residents.filter(
    (resident) => resident.registeredvoter === "NO"
  ).length;
  const pwd = residents.filter((resident) => resident.pwd === "YES").length;
  const seniorcitizen = residents.filter(
    (resident) => resident.seniorcitizen === "YES"
  ).length;
  const singleparents = residents.filter(
    (resident) => resident.singleparents === "YES"
  ).length;

  useEffect(() => {
    const container = containerRef.current;

    // Check if the container is available before accessing properties
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <FaPeopleGroup className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">Population</strong>
            <div className="sm:flex items-center justify-center">
              <strong className="ml-2 text-2xl">{residents.length}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL POPULATION</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <IoMdMale className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">Male</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{maleCount}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL MALE</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <IoMdFemale className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">Female</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{femaleCount}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL FEMALE</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <MdPets className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">Pets</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{petcount}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL PET</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <FaPeopleGroup className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">Registered Voter</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{votercount}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL REGISTERED VOTER</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <PiAlienFill className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2 text-sm">Non-Registered Voter</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{votercount1}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL NON-REGISTERED VOTER</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <FaWheelchair className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">PWDs</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{pwd}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL PWD</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <MdElderly className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">SENIOR CITIZEN</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{seniorcitizen}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL SENIOR CITIZEN</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex space-x-4 items-center">
          <RiParentFill className="h-12 w-12 text-gray-500" />
          <div className="flex flex-col items-start">
            <strong className="mb-2">SINGLE PARENTS</strong>
            <div className="flex items-center justify-center">
              <strong className="ml-2 text-2xl">{singleparents}</strong>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-400">
          <p className="text-xs text-center">TOTAL SINGLE PARENTS</p>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardBoxes;

function BoxWrapper({ children }) {
  return (
    <div className="flex lg:flex-col lg:justify-between shadow-md bg-white sm:flex justify-center flex-col rounded-sm p-6 mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
      {children}
    </div>
  );
}
