import { Suspense } from 'react';
import { openOnboarding } from './utils/extension';
import React from 'react';
// import Unlocked from './Unlocked';
import '../style.css';
import Locked from './Locked';
import { LocalStorageDb } from '../backend/db';

export function Router() {
  return (
    <WithSuspense>
      <_Router />
    </WithSuspense>
  );
}
function _Router() {
  //
  // Expanded view: first time onboarding flow.
  //
  const ae = async function () {
    const accountexists = await LocalStorageDb.get('accountexists');
    console.log(accountexists);
    return accountexists;
  };
  const needsOnboarding = ae().then((e) => e);
  if (!needsOnboarding) {
    openOnboarding();

    return <></>;
  }

  //
  // Popup view: main application.
  //
  return (
    <div className="w-[375px] h-[600px]">
      {/* <Unlocked /> */}
      <Locked />
    </div>
  );
}

export function WithSuspense(props: any) {
  return <Suspense fallback={<BlankApp />}>{props.children}</Suspense>;
}

export function BlankApp() {
  return <div className={'bg-black'}></div>;
}
