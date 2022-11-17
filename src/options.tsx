
import './style.css';
import  React from "react";
import { createRoot } from "react-dom/client";
import Onboarding from './onboarding';
const rootElement = document.getElementById('options');
const root = createRoot(rootElement);

root.render(
  //<React.StrictMode>
    <Onboarding />
  //</React.StrictMode>
);

