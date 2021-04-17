/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">لوحة التحكم</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* الطلبات */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">الطلبات</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* eCommerce */}
        {/*begin::1 Level*/}
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/orders", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/orders">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Cart1.svg")} />
            </span>
            <span className="menu-text">الطلبات</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* المستخدمين */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">المستخدمين</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/users", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/users">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className="menu-text">المستخدمين</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Error Pages */}
        {/*begin::1 Level*/}
        {/* <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/error",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/error">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
              />
            </span>
            <span className="menu-text">Error Pages</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Error Pages</span>
                </span>
              </li>

              <li
                className={`menu-item ${getMenuItemActive("/error/error-v1")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v1">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 1</span>
                </NavLink>
              </li>

              <li
                className={`menu-item ${getMenuItemActive("/error/error-v2")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v2">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page -2</span>
                </NavLink>
              </li>

              <li
                className={`menu-item ${getMenuItemActive("/error/error-v3")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v3">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 3</span>
                </NavLink>
              </li>

              <li
                className={`menu-item ${getMenuItemActive("/error/error-v4")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v4">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 4</span>
                </NavLink>
              </li>

              <li
                className={`menu-item ${getMenuItemActive("/error/error-v5")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v5">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 5</span>
                </NavLink>
              </li>

              <li
                className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v6">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 6</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </li> */}
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
