import React from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import TopDishes from "../../components/TopDishes/TopDishes";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <TopDishes />
      <Footer />
    </div>
  );
};

export default Home;
