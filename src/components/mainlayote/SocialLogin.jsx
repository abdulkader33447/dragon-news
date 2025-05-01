import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-2">loin with</h1>
      <div className="flex flex-col gap-3">
        <button className="btn text-[#4069c1] btn-outline hover:bg-[#1b73e8] hover:text-white">
          <FcGoogle size={24}/> Login with google
        </button>
        <button className="btn btn-primary btn-outline">
          <FaGithub size={24}/> Login with Gitgub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
