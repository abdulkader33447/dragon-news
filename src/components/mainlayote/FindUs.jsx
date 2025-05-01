import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaT } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="my-10">
      <h1 className="font-bold mb-5">Find Us On</h1>
      <div className="join join-vertical  w-full">
        <button className="btn bg-base-100 justify-start  join-item">
        <FaFacebookF className="bg-base-200 text-[#3b5998] p-[4px] rounded-full" size={24} />
          Facebook
        </button>
        <button className="btn  bg-base-100 justify-start join-item">
          <FaTwitter className="bg-base-200 text-[#1da1f2] p-[4px] rounded-full" size={24} />
          Twitter
        </button>
        <button className="btn bg-base-100 justify-start join-item">
          <FaInstagram className="bg-base-200 text-[#c13584] p-[4px] rounded-full" size={24} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
