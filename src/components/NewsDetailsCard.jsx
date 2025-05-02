import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="space-y-4 border border-[#f3f3f3] p-3 rounded-lg">
      <h2 className="font-semibold mb-3 text-xl">{news.title}</h2>
      <img
        className="w-full h-[400px] object-cover rounded-sm"
        src={news.image_url}
        alt=""
      />
      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        <FaArrowLeft />
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
