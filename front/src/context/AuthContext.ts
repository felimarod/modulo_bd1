import { createContext, useContext } from "react";
import { Usuario } from "../entities/user";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: Usuario) => void;
  logout: () => void;
  user: Usuario | undefined;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
