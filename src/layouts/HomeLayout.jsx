import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/mainlayote/LeftAside";
import RightAside from "../components/mainlayote/RightAside";

const HomeLayout = () => {
  return (
    <div className="home_layout mt-5">
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-4">
          <LatestNews />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="main_nav col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
