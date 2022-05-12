import { createContext, useState } from "react";

export const globalContext = createContext();

export const globalContextProvider = (props) => {
  return (
    <globalContext.Provider value={{}}>{props.children}</globalContext.Provider>
  );
};
