import { Suspense } from 'react';
import { openOnboarding } from './utils/extension';
import React from 'react';
import '../style.css';
import PopupRouter from './PopupRouter';
import { useKeyringStoreState } from '../contentScript';
import { KeyringStoreStateEnum } from './Constants';

export function Router() {
  return (
    <WithSuspense>
      <_Router />
    </WithSuspense>
  );
}
function _Router(): JSX.Element {
  const needsOnboarding =
    useKeyringStoreState() === KeyringStoreStateEnum.NeedsOnboarding;

  if (needsOnboarding) {
    console.log('Needs On boarding');
    openOnboarding();
  }

  //
  // Popup view: main application.
  //
  else {
    console.log('Popup Router');
    return (
      <div className="min-w-[375px] min-h-[600px]">
        <PopupRouter />
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
