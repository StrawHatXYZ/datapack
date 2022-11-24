import { Suspense, useEffect, useState } from 'react';
import { openOnboarding } from './utils/extension';
import React from 'react';
import '../style.css';
import { LocalStorageDb } from '../backend/db';
import PopupRouter from './PopupRouter';

export function Router() {
  return (
    <WithSuspense>
      <_Router />
    </WithSuspense>
  );
}
function _Router(): JSX.Element {
  //
  // Expanded view: first time onboarding flow.
  //
  const ae = async function () {
    const accountexists = await LocalStorageDb.get('accountexists');
    console.log(accountexists);
    return accountexists;
  };

  const [needsOnboarding, setNeedsOnboarding] = useState(null);
  useEffect(() => {
    ae().then((e) => setNeedsOnboarding(e));
  }, []);

  if (needsOnboarding === null) {
    return <BlankApp />;
  } else if (!needsOnboarding) {
    openOnboarding();

    return <></>;
  }

  //
  // Popup view: main application.
  //
  return (
    <div className="min-w-[375px] min-h-[600px]">
      <PopupRouter />
      {/* <Locked /> */}
    </div>
  );
}

export function WithSuspense(props: any) {
  return <Suspense fallback={<BlankApp />}>{props.children}</Suspense>;
}

export function BlankApp() {
  return <div className={'bg-black'}></div>;
}
