import React, { useEffect, useState } from "react";
import { AuthContext, User } from "../../context/AuthContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>();

  const login = (user: User) => {
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
