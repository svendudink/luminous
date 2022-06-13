import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext<any>("Users");
const [loggedIn, setLoggedIn] = useState(false);

export const UserContextProvider = (props) => {
  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
