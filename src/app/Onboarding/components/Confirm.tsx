import React from 'react';

export class Confirm extends React.Component<{
  nextStep: any;
  prevStep: any;
  values: any;
}> {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { password, countrycode, confpassword, country, city, age },
    } = this.props;

    const style = `
        flex space-x-5
    `;
    return (
      <div className="form-container flex flex-col justify-center h-full text-lg text-md text-black">
        <h1 className="mb-5 text-center text-[23px] font-bold text-blue-600/70">
          Confirm
        </h1>
        <ul className="list-group space-y-2">
          <li className={style}>Name: {name}</li>
          <li className={style}>Age: {age}</li>

          <li className={style}>Country: {country}</li>
          <li className={style}>City: {city}</li>

          <li className={style}>Phone Number: {phone}</li>
          <li className={style}>Password: {password}</li>
          <li className={style}>Confirm Password: {confpassword}</li>
          <li className={style}>
            Facebook URL: <a href={facebook}>{facebook}</a>
          </li>
          <li className={style}>
            Twitter URL: <a href={twitter}>{twitter}</a>
          </li>
          <li className={style}>
            Github URL: <a href={github}>{github}</a>
          </li>
        </ul>

        <br />
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

export default Confirm;
