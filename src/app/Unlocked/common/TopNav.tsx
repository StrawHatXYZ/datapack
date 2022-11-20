import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import React from 'react';
export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-100 block p-4 w-full ">
          <div className="flex items-center justify-between w-full ">
            {/* <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div> */}

            <div className="text-xl font-semibold text-center text-gray-800">
              <a
                href="#"
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-2xl hover:text-gray-700"
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
                <FiSettings size="25" className='text-gray-800' />
              </div>
            </button>
          </div>

          <div
            className={`absolute ${
              isOpen ? 'block' : 'hidden'
            } z-40  inset-x-0 w-full pt-4 transition-all duration-300 ease-in-out bg-gray-100/95 backdrop-blur-sm `}
          >
            <div className="flex flex-col ">
              <a
                href="#"
                className="px-3 py-3  text-gray-700  pl-4 font-semibold transition-colors duration-300 transform hover:bg-gray-700 hover:text-gray-100"
              >
                {isOpen ? 'Home' : 'No'}
              </a>
              <a
                href="#"
                className="px-3 py-3   text-gray-700  pl-4 font-semibold transition-colors duration-300 transform hover:bg-gray-700 hover:text-gray-100"
              >
                Join Slack
              </a>
              <a
                href="#"
                className="px-3 py-3   text-gray-700  pl-4 font-semibold transition-colors duration-300 transform    hover:bg-gray-700 hover:text-gray-100"
              >
                Browse Topics
              </a>
              <a
                href="#"
                className="px-3 py-3   text-gray-700  pl-4 font-semibold transition-colors duration-300 transform    hover:bg-gray-700 hover:text-gray-100"
              >
                Random Item
              </a>
              <a
                href="#"
                className="px-3 py-3  text-gray-700  pl-4 font-semibold transition-colors duration-300 transform    hover:bg-gray-700 hover:text-gray-100"
              >
                Experts
              </a>
            </div>

         
      </div>
    </div>
  );
}
