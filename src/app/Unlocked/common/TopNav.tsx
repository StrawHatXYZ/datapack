import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import React from 'react';
export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed block my-5 top-0  w-[90%] ">
      <div className=" ">
        <div className="">
          <div className="flex items-center justify-between w-full ">
            {/* <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div> */}

            <div className="text-xl font-semibold text-center text-gray-50">
              <a
                href="#"
                className="text-2xl font-bold text-white transition-colors duration-300 transform dark:text-white lg:text-2xl hover:text-gray-50 dark:hover:text-gray-300"
              >
                Datalab
              </a>
            </div>

            <button
              onClick={handleClick}
              type="button"
              className="flex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div className="w-8 h-8 overflow-hidden flex items-center rounded-full">
                <FiSettings size="25" color="#fff" />
              </div>
            </button>
          </div>

          <div
            className={`absolute ${
              isOpen ? 'block' : 'hidden'
            } z-40  inset-x-0 w-full px-6 my-2 py-2 transition-all duration-300 ease-in-out topnavextend bg-gray-500/40 `}
          >
            <div className="flex flex-col -mx-6 ">
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-50 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700"
              >
                {isOpen ? 'Home' : 'No'}
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-50 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700"
              >
                Join Slack
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-50 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700"
              >
                Browse Topics
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-50 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700"
              >
                Random Item
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-50 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700"
              >
                Experts
              </a>
            </div>

            <div className="flex items-center mt-4 ">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-50 dark:hover:text-gray-400 focus:text-gray-50 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
