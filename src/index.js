/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./app/App";
// import "./index.scss"; // Standard version
import "./sass/style.react.rtl.css"; // RTL version
import "_metronic/_assets/plugins/keenthemes-icons/font/ki.css";
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "_metronic/_assets/plugins/flaticon/flaticon.css";
import "_metronic/_assets/plugins/flaticon2/flaticon.css";
// Datepicker
import "react-datepicker/dist/react-datepicker.css";
import {
  MetronicLayoutProvider,
  MetronicSplashScreenProvider,
  MetronicSubheaderProvider
} from "./_metronic/layout";
import { MetronicI18nProvider } from "./_metronic/i18n";
import { API_END_POINT } from "config";
import GlobalState from "contexts/GlobalState";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

axios.defaults.baseURL = API_END_POINT;
axios.defaults.validateStatus = status => {
  return status < 500;
};

ReactDOM.render(
  <MetronicI18nProvider>
    <MetronicLayoutProvider>
      <MetronicSubheaderProvider>
        <MetronicSplashScreenProvider>
          <GlobalState>
            <App basename={PUBLIC_URL} />
          </GlobalState>
        </MetronicSplashScreenProvider>
      </MetronicSubheaderProvider>
    </MetronicLayoutProvider>
  </MetronicI18nProvider>,
  document.getElementById("root")
);
