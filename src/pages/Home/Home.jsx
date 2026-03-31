import React from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import TopDishes from "../../components/TopDishes/TopDishes";

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <TopDishes />
    </div>
  );
};

export default Home;
