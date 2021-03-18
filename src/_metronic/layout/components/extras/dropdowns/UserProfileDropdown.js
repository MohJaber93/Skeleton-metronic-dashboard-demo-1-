/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";

export function UserProfileDropdown() {
  // const { user } = useSelector((state) => state.auth);
  const user = { firstname: 'mohammed' }
  console.log(user)
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      light:
        objectPath.get(uiService.config, "extras.user.dropdown.style") ===
        "light",
    };
  }, [uiService]);

  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-user-profile"
      >
        <div
          className={
            "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
          }
        >
         
          <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-1">
            {user.firstname} {user.lastname}
          </span>
          <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
            ,Hi
          </span>
          <span className="symbol symbol-35 symbol-light-success">
            <span className="symbol-label font-size-h5 font-weight-bold">
              {user.firstname[0]}
            </span>
          </span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <>
          {!layoutProps.light && (
            <div
              className="d-flex align-items-center justify-content-end flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top"
              style={{
                backgroundImage: `url(${toAbsoluteUrl(
                  "/media/misc/bg-1.jpg"
                )})`,
              }}
            >

              <div className="text-white m-0  mr-3 font-size-h5">
                {user.firstname} {user.lastname}
              </div>
              <div className="symbol bg-white-o-15 mr-3">
                <span className="symbol-label text-success font-weight-bold font-size-h4">
                  {user.firstname[0]}
                </span>
              </div>
            </div>
          )}
        </>

        <div className="navi navi-spacer-x-0 pt-5">
          <div className="navi-footer  px-8 py-5">
            <Link
              to="/logout"
              className="btn btn-light-primary font-weight-bold"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
