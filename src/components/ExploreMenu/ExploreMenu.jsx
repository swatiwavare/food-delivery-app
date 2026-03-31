import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = () => {
  const { category, setCategory } = useContext(StoreContext);
  return (
    <div className="explore-menu">
      <h2>Explore our menu</h2>

      <p className="explore-menu-text">
        Choose from a diverse menu featuringa delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-item ${category === item.menu_name ? "active" : ""}`}
            onClick={() =>
              setCategory((prev) =>
                prev == item.menu_name ? "All" : item.menu_name,
              )
            }
          >
            <img src={item.menu_image} alt={item.menu_name} />

            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
