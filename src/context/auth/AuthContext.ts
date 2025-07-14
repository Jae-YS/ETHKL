import { createContext } from "react";

export type AuthContextType = {
  user: string;
  setUser: (user: string) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
