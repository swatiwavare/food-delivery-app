import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")}>
          <li className={menu === "home" ? "active" : ""}>home</li>
        </Link>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => {
            setMenu("menu");
            document
              .getElementById("explore-menu")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          menu
        </li>
        {/* <li
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </li> */}
        <li
          className={menu === "contact us" ? "active" : ""}
          onClick={() => {
            setMenu("contact us");
            document
              .getElementById("contact-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
      </div>
      <button onClick={() => setShowLogin(true)}>sign in</button>
    </div>
  );
};

export default Navbar;
