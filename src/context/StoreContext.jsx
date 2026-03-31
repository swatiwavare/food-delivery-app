import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [category, setCategory] = useState("All");

  const addToCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id]) {
        updated[id] = updated[id] + 1;
      } else {
        updated[id] = 1;
      }
      return updated;
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      if (updated[id] === 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }

      return updated;
    });
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    category,
    setCategory,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
