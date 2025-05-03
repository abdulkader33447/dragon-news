import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
  const [nameError, setNameError] = useState("");

  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Name should be more then five character");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="font-semibold text-center text-2xl">
          Login your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />
            {nameError && <p className="text-xs text-red-300">{nameError}</p>}
            {/* photo */}
            <label className="label text-sm font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* email */}
            <label className="label text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center mt-5">
              Already Have An Account ?{" "}
              <Link className="text-red-500 underline" to="/auth/login">
                Login
              </Link>
            </p>
            {/* {error && <p className="text-xs text-red-400">{error}</p>} */}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
