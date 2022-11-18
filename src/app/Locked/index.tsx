import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
export default function Locked() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col justify-end h-full  space-y-20 pb-32">
      <div className="flex flex-col space-y-4">
        <div className="self-center">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="70.7px"
            height="70.5px"
            color="#fff"
            viewBox="0 0 311.7 311.5"
            enable-background="new 0 0 311.7 311.5"
          >
            <defs></defs>
            <path
              color="#fff"
              d="M95,0l-8.6,0L0,0v311.5l192.5,0l-47.8-46.8l8.8-6.2c15.4-11,28.1-24.4,36.3-40.5h-96V93.5h45.4c51.2,0,85.9,32.3,85.9,82.1
	c0,15.8-2.8,28.7-8.2,41.2l-0.5,1.1c-8.1,18.8-21.2,34.5-37,47.2l45.4,46.1c51.8-29.6,87-75.5,87-145C311.7,54.3,235.7,0,95,0"
            />
          </svg>
        </div>
        <div className="font-semibold text-2xl text-center">Datapack</div>
      </div>
      <div className="space-y-4 justify-self-end">
        <div className=" relative border m-2 bg-gray-700 border-gray-600 rounded-lg">
          <input
            type={show ? 'text' : 'password'}
            placeholder="Password"
            className=" block w-full p-2.5 bg-gray-700 rounded-lg border text-lg placeholder-gray-400 text-white outline-none"
          />
          {!show ? (
            <AiFillEye
              onClick={() => setShow(true)}
              className="absolute right-5 bottom-[50%] translate-y-[50%] h-5 w-5 cursor-pointer"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setShow(false)}
              className="absolute right-5 bottom-[50%] translate-y-[50%] h-5 w-5 cursor-pointer"
            />
          )}
        </div>
        <div className="m-2 bg-white p-3 rounded-lg  hover:bg-white/95  ">
          <button className=" text-base   font-medium rounded-lg text-black w-full">
            Unlock
          </button>
        </div>
      </div>
    </div>
  );
}
