import { el } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  // console.log(id);

  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      // console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return <div>Total {categoryNews.length} News Found</div>;
};

export default CategoryNews;
