import React, { useState } from 'react';

import Locked from './Locked';
import Unlocked from './Unlocked';
// import { usePopup } from './utils/usePopupState';

export default function PopupRouter() {
  // const { locked } = usePopup();
  const [lock, setLock] = useState(true);
  return <>{lock ? <Locked setLock={setLock} /> : <Unlocked />}</>;
}
