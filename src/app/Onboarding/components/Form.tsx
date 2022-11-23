import React, { useState } from 'react';
import { GetStarted } from './GetStarted';
import SocialProfiles from './CreatePassword';
import Confirm from './Confirm';
import Success from './Success';
import { Interests } from './Interests';

type FormData = {
  step: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  age: string;
  country: string;
  countrycode: string;
  city: string;
  password: string;
  facebook: string;
  twitter: string;
  github: string;
  confpassword: string;
};

export function Form() {
  const [state, setState] = useState<FormData>({
    step: 1,
    name: '',
    email: '',
    phone: '',
    gender: '',
    countrycode: '',
    age: '',
    country: '',
    city: '',
    password: '',
    facebook: '',
    twitter: '',
    github: '',
    confpassword: '',
  });

  const nextStep = () => {
    setState((e) => {
      return { ...e, step: e.step + 1 };
    });
  };
  const prevStep = () => {
    setState((e) => {
      return { ...e, step: e.step - 1 };
    });
  };

  const inputChange = (input: Partial<FormData>) => {
    setState((e) => {
      return { ...e, ...input };
    });
  };

  switch (state.step) {
    case 1:
      return <GetStarted nextStep={nextStep} />;
    case 2:
      return (
        <Interests
          nextStep={nextStep}
          prevStep={prevStep}
          inputChange={inputChange}
          values={state}
        />
      );
    case 3:
      return (
        <SocialProfiles
          nextStep={nextStep}
          prevStep={prevStep}
          inputChange={inputChange}
          values={state}
        />
      );
    case 4:
      return <Confirm nextStep={nextStep} prevStep={prevStep} values={state} />;
    case 5:
      return <Success />;
  }
}

export default Form;
