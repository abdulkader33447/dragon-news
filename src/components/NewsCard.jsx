import { FaEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, image_url, author, rating, total_view, details } = news;

  return (
    <div className="card bg-base-100 border border-[#f3f3f3] rounded-md">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-xl">
          <BsBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Main Content with Gap */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <h2 className="font-bold text-lg leading-snug hover:underline">
          {title}
        </h2>

        {/* Image */}
        <img
          src={image_url}
          alt="News"
          className="w-full h-52 object-cover rounded-md"
        />

        {/* Details */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <Link
                to={`/news-details/${id}`}
                className="text-orange-500 hover:underline font-semibold cursor-pointer"
              >
                {" "}
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
        <div className="flex items-center justify-between px-4 py-2 border-t border-[#f3f3f3] text-sm ">
          <div className="flex items-center gap-2 text-orange-500">
            <FaStar />
            <span className="text-black font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
