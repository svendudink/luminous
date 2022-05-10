import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  );
};
