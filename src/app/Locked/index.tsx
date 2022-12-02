import React, { useState } from 'react';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { LocalStorageDb } from '../../backend/db';
import { checkEncryptedKeyring } from '../../backend/keyring';
import {
  keyringStoreState,
  KeyringStoreStateEnum,
  lockState,
  useKeyringStoreState,
} from '../atoms';

// import { BrowserRuntimeExtension } from '../utils/extension';

export default function Locked() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ present: false, msg: '' });
  const setLockState = useSetRecoilState(lockState);
  console.log(useKeyringStoreState());
  async function handleClick() {
    const success = await checkEncryptedKeyring('encryptedpass', password);
    // LocalStorageDb.set('account-exit', false);
    if (success) {
      setLockState(KeyringStoreStateEnum.Unlocked);

      setError({ present: false, msg: 'Sucess' });
    } else {
      console.log('Failure');
      setError({ present: true, msg: 'wrong password' });
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center bg-gray-100">
      <div className="space-y-4">
        <div className="flex flex-row justify-center pb-3">
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
        <div className="text-4xl font-bold text-center text-blue-500 pb-14">
          Datapack
        </div>
      </div>

      <div className="space-y-4 justify-self-end">
        <div className=" relative m-3 border-2 bg-gray-100 border-gray-600 rounded-lg">
          <input
            type={show ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(w) => setPassword(w.target.value)}
            className=" block w-full p-2 bg-gray-100 rounded-lg border text-lg placeholder-gray-400 text-gray-800 outline-none"
          />
          {!show ? (
            <AiFillEye
              onClick={() => setShow(true)}
              className="absolute right-4 bottom-[50%] translate-y-[50%] h-5 w-5 cursor-pointer text-gray-700"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setShow(false)}
              className="absolute right-4 bottom-[50%] translate-y-[50%] h-5 w-5 cursor-pointer text-gray-700"
            />
          )}
        </div>
        {error.present && (
          <div className="text-red-800 text-lg pl-5">{error.msg}</div>
        )}

        <div className="m-3  rounded-lg    ">
          <button
            onClick={handleClick}
            className="p-3 text-base text-gray-100  font-medium rounded-lg bg-blue-500 hover:bg-blue-600 w-full"
          >
            Unlock
          </button>
        </div>
      </div>
    </div>
  );
}
