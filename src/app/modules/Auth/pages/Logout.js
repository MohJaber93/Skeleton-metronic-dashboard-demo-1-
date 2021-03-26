import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../../_metronic/layout";
import { GlobalContext } from "contexts/GlobalState";
import { GLOBALSTATE_ACTIONS } from "app/constants";

const Logout = () => {
  const [{ isAuthorized }, dispatch] = React.useContext(GlobalContext);

  useEffect(() => {
    console.log("test this");
    dispatch({ type: GLOBALSTATE_ACTIONS.LOGOUT });
  }, [dispatch]);

  return isAuthorized ? <LayoutSplashScreen /> : <Redirect to="/auth/login" />;
};

export default Logout;
