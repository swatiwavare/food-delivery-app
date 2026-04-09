import React, { useContext } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  // // 🧠 Calculate totals
  // let subtotal = 0;

  // food_list.forEach((item) => {
  //   if (cartItems[item._id] > 0) {
  //     subtotal += item.price * cartItems[item._id];
  //   }
  // });

  // const deliveryFee = subtotal === 0 ? 0 : 2;
  // const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      {/* 🔹 Cart Items Header */}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {/* 🔹 Dynamic Items */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-item" key={item._id}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className="remove" onClick={() => removeFromCart(item._id)}>
                  x
                </p>
              </div>
            );
          }
          return null;
        })}

        <hr />
      </div>

      {/* 🔹 Bottom Section */}
      <div className="cart-bottom">
        {/* Cart Totals */}
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount() + 2}</b>
          </div>

          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>

          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
