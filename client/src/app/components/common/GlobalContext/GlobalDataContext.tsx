"use client";

import { createContext, useState, useContext, ReactNode } from "react";

import { GlobalDataContextType } from "../../../../../models/GlobalContext.model";
import { ITeams } from "../../../../../models/Teams.model";
import { Player } from "../../../../../models/Player.model";

const GlobalDataContext = createContext<GlobalDataContextType | undefined>(
  undefined
);

export const GlobalDataProvider = ({ children }: { children: ReactNode }) => {
  const [currentSelectedTeam, setCurrentSelectedTeam] = useState<ITeams | null>(
    null
  );
  const [currentSelectedPlayer, setCurrentSelectedPlayer] =
    useState<Player | null>(null);

  return (
    <GlobalDataContext.Provider
      value={{
        currentSelectedTeam,
        setCurrentSelectedTeam,
        currentSelectedPlayer,
        setCurrentSelectedPlayer,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = (): GlobalDataContextType => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }
  return context;
};
