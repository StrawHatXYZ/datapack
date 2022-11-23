import Select from 'react-select';
import { Country, City } from 'country-state-city';
import React, { useState, useMemo } from 'react';

export function Interests({ nextStep, prevStep, inputChange, values }: any) {
  const [cities, setCities] = useState(
    City.getCitiesOfCountry(values.countrycode).map((e) => {
      return { label: e.name, value: e.stateCode };
    }),
  );

  const [error, setError] = useState<boolean>(false);

  const options = useMemo(
    () =>
      Country.getAllCountries().map((e) => {
        return { value: e.isoCode, label: e.name };
      }),
    [],
  );
  const gender = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Prefer not to say', label: 'Prefer not to say' },
  ];

  const cont = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  function handleCountryChange(e) {
    const Allcities = City.getCitiesOfCountry(e.value);
    setCities(() =>
      Allcities.map((e) => {
        return { label: e.name, value: e.stateCode };
      }),
    );
    inputChange({ country: e.label });
    inputChange({ countrycode: e.value });
  }

  function handleSubmit(e) {
    if (values.age === '' || values.country === '' || values.gender === '') {
      setError(true);
    } else {
      cont(e);
    }
  }

  return (
    <div className="w-full max-w-lg text-black">
      <h1 className="m-5 text-3xl text-center text-blue-500 font-bold">
        Details
      </h1>
      <div className="px-1 py-5">
        <p className="text-[16px] text-start">
          Enter your details to get more personalized recommendations
        </p>
      </div>

      <div className="flex flex-row space-x-4 ">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Age
          </label>
          <input
            className="w-full px-3 py-[0.6rem] text-sm leading-tight text-gray-700 border rounded border-gray-300 appearance-none focus:outline-blue-600/95 focus:shadow-outline"
            id="age"
            type="Number"
            min="0"
            onKeyDown={(e) =>
              ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
            }
            placeholder="Enter your age"
            name="password"
            onChange={(e) => inputChange({ age: e.target.value })}
            defaultValue={values.age}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Gender
          </label>
          <Select
            options={gender}
            defaultValue={values.gender && { label: values.gender }}
            // value={values.gender}
            isSearchable={false}
            placeholder="Select Gender"
            onChange={(e) => inputChange({ gender: e.label })}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-4 ">
        <div className="mb-4 w-full">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Country
          </label>
          <Select
            options={options}
            defaultValue={values.country && { label: values.country }}
            placeholder="Select Country"
            onChange={(e) => handleCountryChange(e)}
          />
        </div>
      </div>
      <div className="mb-4 w-full">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          City
        </label>
        <Select
          options={cities}
          defaultValue={values.city && { label: values.city }}
          placeholder="Select City"
          isDisabled={cities.length <= 0}
          onChange={(e) => inputChange({ city: e.label })}
        />
      </div>
      {error && <div className="text-red-600">All feilds are required</div>}
      <br />

      <div className="flex flex-row justify-between ">
        <div className="">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold py-2 px-4 rounded"
            onClick={back}
          >
            Back
          </button>
        </div>
        <div className="col-6 text-right">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold py-2 px-4 rounded"
            onClick={(e) => handleSubmit(e)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
export default Interests;
