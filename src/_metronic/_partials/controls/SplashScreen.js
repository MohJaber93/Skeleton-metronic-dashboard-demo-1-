import React from "react";
import {CircularProgress} from "@material-ui/core";
import {toAbsoluteUrl} from "../../_helpers";

export function SplashScreen() {
  return (
    <>
      <div className="splash-screen">
        <img
          src={toAbsoluteUrl("/media/logos/logo.jpeg")}
          alt="Al hawat logo"
        />
        <CircularProgress className="splash-screen-spinner" />
      </div>
    </>
  );
}
