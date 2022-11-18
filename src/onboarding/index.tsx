import React from "react";
import { useState } from "react";
import { LocalStorageDb } from "../backend/db";
 function Onboarding( ) {
    const [storage, setStorage] = useState<string | null>(null);
  return (
    <div className="bg-gradient-to-r from-blue-400 to-emerald-400 h-screen flex flex-col justify-center items-center ">
        <div className="w-[375px] h-[600px] bg-gray-100 rounded-xl p-5 shadow-xl ">
            <div className="flex flex-col justify-center items-center bg-gray-500 p-3 rounded-lg">
                <h1 className="text-3xl font-bold text-gray-200">Welcome to the <span className="text-blue-400">Tab</span><span className="text-emerald-400">Manager</span> extension!</h1>
            </div>
            {}
            <input type="text" onChange={
                async (e) => {
                    await LocalStorageDb.set("onboarding", false);

                    setStorage(e.target.value);

                }
            } className="w-full h-15 mt-5 p-2 rounded-lg border-2 border-gray-400 text-gray-800" placeholder="Enter your name" />
            <button onClick={
                async () => {
                    const isVisible = await LocalStorageDb.get("onboarding");
                    console.log(isVisible);

                    console.log(storage);
                }
            } className="w-full h-10 mt-5 p-2 rounded-lg bg-blue-500 text-gray-100">Get Started</button>


        </div>
        
    
    </div>
  );
}

export default Onboarding;
