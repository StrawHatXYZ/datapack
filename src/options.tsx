
import './style.css';
import  React from "react";
import { createRoot } from "react-dom/client";
import Onboarding from './app/Onboarding';
const rootElement = document.getElementById('options');
const root = createRoot(rootElement);

root.render(
  //<React.StrictMode>
    <Onboarding />
  //</React.StrictMode>
);

