
import { Suspense } from 'react';
import { openOnboarding } from './utils/extension';
import React from 'react';
import Unlocked from './Unlocked';
import '../style.css';

export function Router() {
  console.log('Router');
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
  const needsOnboarding = false;
  if (needsOnboarding) {
    openOnboarding();

    return <></>;
  }

  //
  // Popup view: main application.
  //
  return (
    <div className="h-screen min-h-[600px] scrollbar-hide  min-w-[375px] ">
      <Unlocked />
    </div>
  );
}

export function WithSuspense(props: any) {
  return <Suspense fallback={<BlankApp />}>{props.children}</Suspense>;
}

export function BlankApp() {
  return <div className={'bg-black'}></div>;
}
