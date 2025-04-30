import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="home_layout mt-5">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-4">
        <LatestNews></LatestNews>
        </section>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main_nav">
          <Outlet />
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
