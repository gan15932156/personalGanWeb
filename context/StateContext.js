"use client";

import { createContext, useState } from "react";

export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [toggleService, setToggleService] = useState(false);
  const handleToggleService = (newtoggle) => {
    setToggleService(newtoggle);
  };
  return (
    <StateContext.Provider value={{ toggleService, handleToggleService }}>
      {children}
    </StateContext.Provider>
  );
};
export default StateProvider;
