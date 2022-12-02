import { Suspense, useEffect, useState } from 'react';
import { openOnboarding } from './utils/extension';
import React from 'react';
import '../style.css';
import { LocalStorageDb } from '../backend/db';
import PopupRouter from './PopupRouter';
import {
  keyringStoreState,
  KeyringStoreStateEnum,
  useKeyringStoreState,
} from './atoms';
import { useRecoilValue } from 'recoil';

export function Router() {
  return (
    <WithSuspense>
      <_Router />
    </WithSuspense>
  );
}
function _Router(): JSX.Element {
  const need = useRecoilValue(keyringStoreState);
  //
  // Expanded view: first time onboarding flow.
  //
  // const ae = async function () {
  //   const accountexists = await LocalStorageDb.get('accountexists');
  //   console.log(accountexists);
  //   return accountexists;
  // };

  // const [needsOnboardings, setNeedsOnboarding] = useState(null);
  // useEffect(() => {
  //   ae().then((e) => setNeedsOnboarding(e));
  // }, []);
  console.log('Needs On boarding');

  console.log(need);

  const needsOnboarding =
    useKeyringStoreState() === KeyringStoreStateEnum.NeedsOnboarding;

  if (needsOnboarding) {
    console.log('Needs On boarding');
    openOnboarding();
  }

  // return <></>;

  //
  // Popup view: main application.
  //
  else {
    console.log('Popup Router');
    return (
      <div className="min-w-[375px] min-h-[600px]">
        <PopupRouter />
        {/* <Locked /> */}
      </div>
    );
  }
}
export function WithSuspense(props: any) {
  return <Suspense fallback={<BlankApp />}>{props.children}</Suspense>;
}

export function BlankApp() {
  console.log('Blank app');
  return <div className={'bg-black'}></div>;
}
