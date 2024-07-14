import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  const [token, setToken] = useState("");

  const url = "http://localhost:4000";

  const addToCart = async(itemId) => {
    // setCartItems((prev) => {
    //     const newCount = (prev[itemId] || 0) + 1;
    //     return { ...prev, [itemId]: newCount };
    // });
    if (!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}));
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
};

const removeFromCart = async(itemId) => {
  // setCartItems((prev) => {
  //     if (!prev[itemId]) return prev;
  //     const newCount = prev[itemId] - 1;
  //     if (newCount === 0) {
  //         const { [itemId]: _, ...rest } = prev;
  //         return rest;
  //     }
  //     return { ...prev, [itemId]: newCount };
  
  // });
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  if(token){
    await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
  }
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

  const loadCartData=async(token)=>{
    const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);

  }
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      if (response.data && response.data.data) {
        setFoodList(response.data.data);
      } else {
        console.error("Error fetching food list: No data in response");
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(localStorage.getItem("token"));
      }
    };
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
