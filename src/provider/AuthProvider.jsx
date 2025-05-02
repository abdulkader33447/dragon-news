import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "abdul kader",
    email: "a@gmail.com",
  });
  const authInfo = {
    user,
    setUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
