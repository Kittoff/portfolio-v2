"use client";
import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuClosedCompletely, setIsMenuClosedCompletely] = useState(true);

  return (
    <MenuContext.Provider
      value={{ isMenuClosedCompletely, setIsMenuClosedCompletely }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
