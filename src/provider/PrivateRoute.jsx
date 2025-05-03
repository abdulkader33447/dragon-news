import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/mainlayote/pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user);

  const location = useLocation()
  // console.log(location);

  // working like suspension
  if (loading) {
    return <Loading/>;
  }

  // if user thake ,return children
  if (user && user?.email) {
    return children;
  }

  // else navigate > login
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
