import React, { use } from "react";

const categoryPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);

const Categories = () => {
  // console.log(categoryPromise);
  const categories = use(categoryPromise)
  return (
    <div>
      <h1 className="font-bold">All Category{categories.length}</h1>
    </div>
  );
};

export default Categories;
