import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  // const token = localStorage.getItem("token");

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
      {!token ? (
        <button onClick={() => setShowLogin(true)}>sign in</button>
      ) : (
        <div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li>
              <img src={assets.bag_icon} alt="" />
              <p>orders</p>
            </li>
            <hr />
            <li onClick={logout}>
              <img src={assets.logout_icon} alt="" />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
