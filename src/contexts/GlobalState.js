import React, { createContext, useReducer } from "react";
import { GLOBALSTATE_ACTIONS } from "../constants";

const initialState = {
  isAuthorized: !!localStorage.getItem("isAuth"),
  admin: { firstname: "محمد", lastname: "جبر" }
};

export const GlobalContext = createContext(initialState);

const Reducer = (state, action) => {
  switch (action.type) {
    case GLOBALSTATE_ACTIONS.SET_IS_AUTH: {
      const payload = action.data;
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isAuthorized: true
      };
    }
    case GLOBALSTATE_ACTIONS.LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        isAuthorized: false
      };
    }
    default:
      return state;
  }
};

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
