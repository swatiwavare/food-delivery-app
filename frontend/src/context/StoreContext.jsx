import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);
import axios from "axios";
export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [category, setCategory] = useState("All");
  const [token, setToken] = useState("");
  const [food_list, setFoodlist] = useState([]);
  const url = "http://localhost:4000";
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
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodlist(response.data.data);
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
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
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
