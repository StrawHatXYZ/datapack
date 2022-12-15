import React from 'react';
import { useRecoilValue } from 'recoil';
import { keyringStoreState, lockState } from '../contentScript';
import { KeyringStoreStateEnum } from './Constants';

import Locked from './Locked';
import Unlocked from './Unlocked';

export default function PopupRouter() {
  const lockedState = useRecoilValue(lockState);
  const keyring = useRecoilValue(keyringStoreState);
  return (
    <>
      {keyring === KeyringStoreStateEnum.Loading ? (
        'Loading'
      ) : lockedState === KeyringStoreStateEnum.Locked ? (
        <Locked />
      ) : (
        <Unlocked />
      )}
    </>
  );
}
