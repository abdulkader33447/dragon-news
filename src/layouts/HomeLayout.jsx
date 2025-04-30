import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div className="home_layout mt-5">
      <header>
        <Header></Header>
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
