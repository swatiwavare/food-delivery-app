import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./TopDishes.css";
const TopDishes = () => {
  const { food_list, cartItems, addToCart, removeFromCart, category } =
    useContext(StoreContext);
  return (
    <div className="top-dishes" id="top-dishes">
      <h2>Top dishes near you</h2>
      <div className="top-dishes-list">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((item) => (
            <div className="food-item" key={item._id}>
              {/* Image */}
              <div className="food-item-img-container">
                <img src={item.image} alt={item.name} />
                {cartItems[item._id] ? (
                  <div className="counter">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span>{cartItems[item._id]}</span>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                ) : (
                  <div className="add-btn" onClick={() => addToCart(item._id)}>
                    +
                  </div>
                )}
                {/* Add Button */}
              </div>

              {/* Info */}
              <div className="food-item-info">
                <div className="food-item-name-rating">
                  <p>{item.name}</p>
                  <span>⭐⭐⭐⭐</span>
                </div>

                <p className="food-item-desc">{item.description}</p>

                <p className="food-item-price">₹{item.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopDishes;
