import React, { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Usuario } from "../../entities/user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Usuario | undefined>();

  const login = (user: Usuario) => {
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(undefined);
    window.localStorage.clear();
    window.sessionStorage.clear();
  };
  useEffect(() => {
    const userLS = window.localStorage.getItem("user");

    if (userLS === null) {
      setIsAuthenticated(false);
      setUser(undefined);
    } else {
      setIsAuthenticated(true);
      setUser(JSON.parse(userLS));
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
