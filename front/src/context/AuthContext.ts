import { createContext, useContext } from "react";

interface User {
  data: string;
  name: string;
}
interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  user: User | undefined;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export type { User };
