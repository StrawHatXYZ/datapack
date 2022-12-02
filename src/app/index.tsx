import * as React from 'react';
import { RecoilRoot } from 'recoil';
import '../style.css';
import { Router } from './Router';

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
