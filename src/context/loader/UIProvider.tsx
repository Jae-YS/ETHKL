import React, { useState } from "react";
import { UIContext } from "./UIContext";

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAppLoading, setIsAppLoading] = useState(false);

  return (
    <UIContext.Provider value={{ isAppLoading, setIsAppLoading }}>
      {children}
    </UIContext.Provider>
  );
};
