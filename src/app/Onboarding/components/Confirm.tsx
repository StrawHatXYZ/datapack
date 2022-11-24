import React from 'react';

interface myProps {
  nextStep: () => void;
  prevStep: () => void;
  values: any;
}

export function Confirm({ nextStep, prevStep, values }: myProps) {
  const cont = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const style = `
        flex space-x-5
    `;
  return (
    <div className="form-container flex flex-col justify-center h-full text-lg text-md text-black">
      <h1 className="mb-5 text-center text-[23px] font-bold text-blue-600/70">
        Confirm
      </h1>
      <ul className="list-group space-y-2">
        <li className={style}>Age: {values.age}</li>

        <li className={style}>Country: {values.country}</li>
        <li className={style}>Countrycode: {values.countrycode}</li>

        <li className={style}>City: {values.city}</li>

        <li className={style}>Password: {values.password}</li>
        <li className={style}>Confirm Password: {values.confpassword}</li>
      </ul>

      <br />
      <br />

      <div className="flex flex-row justify-between ">
        <div className="">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold py-2 px-4 rounded"
            onClick={(e) => back(e)}
          >
            Back
          </button>
        </div>
        <div className="col-6 text-right">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold py-2 px-4 rounded"
            onClick={(e) => cont(e)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
