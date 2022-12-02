import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { KeyringStoreStateEnum, lockState } from './atoms';

import Locked from './Locked';
import Unlocked from './Unlocked';

export default function PopupRouter() {
  const lockedState = useRecoilValue(lockState);
  return (
    <>
      {lockedState === KeyringStoreStateEnum.Locked ? <Locked /> : <Unlocked />}
      {/* <Locked /> */}
    </>
  );
}
