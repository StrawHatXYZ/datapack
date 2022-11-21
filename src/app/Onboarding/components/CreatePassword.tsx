import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export class SocialProfiles extends React.Component<{
  nextStep: any;
  prevStep: any;
  inputChange: any;
  values: any;
}> {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    console.log(this.props.values);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="w-full max-w-lg text-black">
        <h1 className="m-5 text-3xl text-center text-blue-500 font-bold">
          Create a Password
        </h1>
        <div className="px-1 py-5">
          <p className="text-[16px] text-start">
            Password must be at least 8 characters.
          </p>
          <p className="text-[16px] text-start">
            Remember password to unlock the extension
          </p>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded border-gray-300 appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => inputChange({ password: e.target.value })}
            defaultValue={values.password}
          />
        </div>

        <div className="mb-4 relative">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded border-gray-300 appearance-none focus:outline-none focus:shadow-outline"
            id="confpassword"
            type={this.state.show ? 'password' : 'text'}
            placeholder="Enter password again"
            name="confpassword"
            onChange={(e) => inputChange({ confpassword: e.target.value })}
            defaultValue={values.confpassword}
          />
          {this.state.show ? (
            <AiFillEye
              onClick={() => this.setState({ show: false })}
              className="absolute right-4 bottom-[50%] translate-y-[115%] h-5 w-5 cursor-pointer text-gray-700"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => this.setState({ show: true })}
              className="absolute right-4 bottom-[50%] translate-y-[115%] h-5 w-5 cursor-pointer text-gray-700"
            />
          )}
        </div>

        <br />

        <div className="flex flex-row justify-between ">
          <div className="">
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold py-2 px-4 rounded"
              onClick={this.back}
            >
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold py-2 px-4 rounded"
              onClick={this.continue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
