import { createContext, useState } from "react";


export const UtilityContext = createContext();

export function UtilityProvider({ children }) {


 

  return (
    <UtilityContext.Provider value={{  }}>
      {children}
    </UtilityContext.Provider>
  );
}