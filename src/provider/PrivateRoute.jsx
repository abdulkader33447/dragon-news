import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../components/mainlayote/pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user);

  // working like suspension
  if (loading) {
    return <Loading/>;
  }

  // if user thake ,return children
  if (user && user?.email) {
    return children;
  }

  // else navigate > login
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
