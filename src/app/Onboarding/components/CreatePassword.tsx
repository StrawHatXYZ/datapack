import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { setEncryptedKeyring } from '../../../backend/keyring';
import { LocalStorageDb } from '../../../backend/db';
import { ACCOUNT_EXITS } from '../../Constants';

enum errorType {
  Length,
  Match,
  None,
}

interface Myprops {
  nextStep: any;
  prevStep: any;
  inputChange: any;
  values: any;
}
interface Mystate {
  show: boolean;
  error: boolean;
  errorTyp: errorType;
}

export class SocialProfiles extends React.Component<Myprops, Mystate> {
  constructor(props) {
    super(props);
    this.state = { show: true, error: false, errorTyp: errorType.None };
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
  validatePassword = (e) => {
    if (this.props.values.password.length < 8) {
      this.setState({ error: true });
      this.setState({ errorTyp: errorType.Length });
    } else if (this.props.values.password !== this.props.values.confpassword) {
      this.setState({ error: true });
      this.setState({ errorTyp: errorType.Match });
    } else {
      this.setState({ error: false });
      setEncryptedKeyring('encryptedpass', this.props.values.password);
      LocalStorageDb.set(ACCOUNT_EXITS, true);
      this.continue(e);
    }
  };

  render() {
    const { values, inputChange } = this.props;
    const { show, error, errorTyp } = this.state;

    return (
      <div className="w-full max-w-lg text-black">
        <h1 className="m-5 text-3xl text-center text-blue-500 font-bold">
          Create a Password
        </h1>
        <div className="px-1 py-5">
          <p className="text-[16px] text-start">
            It must be at least 8 characters.
          </p>
          <p className="text-[16px] text-start">
            Remember this to unlock the extension
          </p>
        </div>

        <div className="mb-4 relative">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            className={`w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded border-gray-300 ${
              error &&
              errorTyp === errorType.Length &&
              'border-red-600 focus focus:outline-red-600/90'
            } focus:outline-blue-600/90 focus:shadow-outline`}
            type={show ? 'password' : 'text'}
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => inputChange({ password: e.target.value })}
            defaultValue={values.password}
          />
          {show ? (
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
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Confirm Password
          </label>
          <input
            className={`  ${
              error &&
              errorTyp === errorType.Match &&
              'border-red-600 focus focus:outline-red-600/90'
            } w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded border-gray-300 appearance-none focus:outline-blue-600/90 focus:shadow-outline`}
            id="confpassword"
            type={show ? 'password' : 'text'}
            placeholder="Enter password again"
            name="confpassword"
            onChange={(e) => inputChange({ confpassword: e.target.value })}
            defaultValue={values.confpassword}
          />
        </div>
        {error &&
          (errorTyp === errorType.Length ? (
            <div className="text-red-700">
              Your password must be at least 8 characters
            </div>
          ) : (
            <div className="text-red-700">Your passwords do not match</div>
          ))}

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
              onClick={(e) => this.validatePassword(e)}
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
