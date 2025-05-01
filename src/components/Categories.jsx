import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);

const Categories = () => {
  // console.log(categoryPromise);
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">All Category{categories.length}</h1>
      <div className="grid grid-cols-1 gap-5 mt-3">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"} key={category.id}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
