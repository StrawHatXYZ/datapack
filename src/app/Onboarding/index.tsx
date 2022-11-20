import React from "react";
import { useState } from "react";
import Form from "./components/Form";
 function Onboarding( ) {
    const [storage, setStorage] = useState<string | null>(null);
  return (
    <div className="bg-gradient-to-r from-blue-400 to-emerald-400 h-screen flex flex-col justify-center items-center ">
        <div className="w-[375px] h-[600px] bg-gray-100 rounded-xl p-5 shadow-xl ">
            <Form />
        </div>
        
    
    </div>
  );
}

export default Onboarding;
