import React from 'react';
// import Logo from '../../assets/128x.png';

export class GetStarted extends React.Component<{ nextStep: any }> {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div className="w-full max-w-lg text-black p-2">
        <h1 className="m-5 text-4xl text-center text-blue-500 font-bold">
          Datapack
        </h1>
        <div className="flex flex-row p-8 justify-center">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="80px"
            height="80px"
            color="#fff"
            viewBox="0 0 311.7 311.5"
            enableBackground="new 0 0 311.7 311.5"
          >
            <defs></defs>
            <path
              color="#fff"
              d="M95,0l-8.6,0L0,0v311.5l192.5,0l-47.8-46.8l8.8-6.2c15.4-11,28.1-24.4,36.3-40.5h-96V93.5h45.4c51.2,0,85.9,32.3,85.9,82.1
                             c0,15.8-2.8,28.7-8.2,41.2l-0.5,1.1c-8.1,18.8-21.2,34.5-37,47.2l45.4,46.1c51.8-29.6,87-75.5,87-145C311.7,54.3,235.7,0,95,0"
            />
          </svg>
        </div>
        <p className="text-lg text-justify">
          Get <b>NFT</b> and <b>DAO</b> recommendations based on your interests. Your data is stored in your browser and not shared with anyone.
        </p>

        <br />

        <div className="mt-16">
          <button
            className="w-full  bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-4 rounded"
            onClick={this.continue}
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }
}

export default GetStarted;
