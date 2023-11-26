import React, { Fragment } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";

function Dashboard1() {
  return (
    <div className="h-screen w-[75%]">
      <div className="border-b-2 border-gray-400 p-3 flex items-center justify-end gap-4">
        <IoMdNotifications className="h-6 w-6 text-gray-500" />

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="p-1.5 rounded-md sm inline-flex items-center text-gray-500 hover:text-opacity-80 focus:outline-none">
                <FaCircleUser className="h-6 w-6" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute rounded-md shadow-mb right-2 z-5 mt-0 bg-black w-40 transform translate-y-2">
                  <div className="relative bg-gray-400 pt-10 pb-5">
                    <div className="absolute">
                      <FaCircleUser className="flex items-center ml-11 h-16 w-16 text-gray-500" />
                      <div className="ml-9 pb-6">
                        <strong>DOE, JOHN</strong>
                        <p className="text-xs ml-2">John_Doe134</p>
                      </div>
                      <button
                        type="button"
                        className="flex items-center space-x-2 ml-2"
                      >
                        <FaSignOutAlt className="text-gray-500" />
                        <p>Sign out</p>
                      </button>
                    </div>
                    <div className="bg-white p-20"></div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      <div className="flex items-center justify-center pt-2 pb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et expedita
        laborum ipsum nobis quidem assumenda sequi ipsa ipsam minus illum omnis
        maiores culpa quia beatae sit saepe, magnam explicabo? Praesentium!
      </div>
    </div>
  );
}

export default Dashboard1;
