import React from "react";
import { Brand } from "../brand/Brand";
import { AsideMenu } from "./aside-menu/AsideMenu";

export function Aside() {
  return (
    <>
      {/* begin::Aside */}
      <div
        id="kt_aside"
        className={`aside aside-left d-flex flex-column flex-row-auto`}
      >
        <Brand />
        {/* begin::Aside Menu */}
        <div
          id="kt_aside_menu_wrapper"
          className="aside-menu-wrapper flex-column-fluid"
        >
          <AsideMenu />
        </div>
        {/* end::Aside Menu */}
      </div>
      {/* end::Aside */}
    </>
  );
}
