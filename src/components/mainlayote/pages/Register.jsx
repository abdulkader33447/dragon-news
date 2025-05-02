import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="font-semibold text-center text-2xl">
          Login your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label text-sm font-semibold">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
            {/* photo */}
            <label className="label text-sm font-semibold">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
            {/* email */}
            <label className="label text-sm font-semibold">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label text-sm font-semibold">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center mt-5">
              Already Have An Account ?{" "}
              <Link className="text-red-500 underline" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
