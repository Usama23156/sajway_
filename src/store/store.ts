import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// 🔁 Load from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;
  } catch (error) {
    console.error("Could not load cart from localStorage", error);
    return undefined;
  }
};

// 🛒 Save to localStorage
const saveCartToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.error("Could not save cart to localStorage", error);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCartFromLocalStorage(), // ← Load cart data on init
  },
});

// 🔁 Subscribe to store updates
store.subscribe(() => {
  saveCartToLocalStorage(store.getState());
});

export { store };
