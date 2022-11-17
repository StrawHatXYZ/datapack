import { Suspense } from "react";
import { openOnboarding } from "./utils/extension";
import React from "react";
import { LocalStorageDb } from "../backend/db";

export function Router() {
  console.log("Router");
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
      const needsOnboarding = async () => {
       await LocalStorageDb.get("onboarding");
      };
      console.log(needsOnboarding);
  
    if (needsOnboarding) {
      openOnboarding();

      return <></>;
    }
  
    

    //
    // Popup view: main application.
    //
    return (
      
      <div style={{
        height: "100vh",
        minHeight: "600px",
        minWidth: "375px",
      }}>
        <h1>Hello World</h1>
      </div>
    );
  }

  

export function WithSuspense(props: any) {
    return <Suspense fallback={<BlankApp />}>{props.children}</Suspense>;
  }
  
  export function BlankApp() {
    return <div className={"bg-black"}></div>;
  }