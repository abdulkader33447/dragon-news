import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    // console.log("user taring to log out");
    logOut()
      .then(() => {
        alert("successfully logged out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between w-11/12 mx-auto items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="rounded-full size-10"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button className="btn btn-primary px-10" onClick={handleLogOut}>
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
