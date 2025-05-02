import React, { useEffect, useState } from "react";
import Header from "../../Header";
import RightAside from "../RightAside";
import NewsDetailsCard from "../../NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {

const data = useLoaderData()
const {id} = useParams()
const [news, setNews] = useState({})
// console.log(data,id,news);

useEffect(() => {
  const newsDetails = data.find((singleNews) => singleNews.id == id)
  setNews(newsDetails)
},[data,id])

  return (
    <div>
      <header className=" py-3">
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-bold text-2xl mb-5">News details</h2>
          <NewsDetailsCard news={news}/>
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
