import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const data = useContext(StoreContext);
  console.log(data);
  return (
    <div className="place-order">
      {/* LEFT SIDE → FORM */}
      <div className="place-order-left">
        <h2>Delivery Information</h2>

        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="text" placeholder="Phone" />
      </div>

      {/* RIGHT SIDE → TOTAL */}
      <div className="place-order-right">
        <h2>Cart Totals</h2>

        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>

        <hr />

        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>$2</p>
        </div>

        <hr />

        <div className="cart-total-details total">
          <b>Total</b>
          <b>${getTotalCartAmount() + 2}</b>
        </div>

        <button>PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
