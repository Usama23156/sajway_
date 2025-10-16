import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the product type
interface Product {
  id: number;
  img: string;
  name: string;
  price: number; // Use number for calculations
  descrption: string;
  size?: string; // Optional size property
}

// Define the cart item type
interface CartItem {
  product: Product;
  count: number;
  totalPrice: number;
}

// Define the initial state type
interface CartState {
  products: CartItem[];
}

// Initial state
const initialState: CartState = {
  products: [],
};

// Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<Product & { quantity?: number }>) {
      const product = action.payload;
      const quantity = typeof product.quantity === 'number' ? product.quantity : 1;
      const price = Number(product.price);

      const exItem = state.products.find(
        (item) =>
          item.product.id === product.id && item.product.size === product.size
      );

      if (exItem) {
        exItem.count += quantity;
        exItem.totalPrice += price * quantity; // Ensure price is a number
      } else {
        state.products.push({
          product,
          count: quantity,
          totalPrice: price * quantity,
        });
      }
    },
    increase(state, action: PayloadAction<Product>) {
      const exItem = state.products.find(
        (item) => item.product.id === action.payload.id
      );

      if (exItem) {
        exItem.count += 1;
        exItem.totalPrice += action.payload.price; // Ensure price is a number
      } else {
        console.warn("Item not found in cart for increase operation.");
      }
    },

    decrease(state, action: PayloadAction<Product>) {
      const exItem = state.products.find(
        (item) => item.product.id === action.payload.id
      );

      if (exItem && exItem.count > 1) {
        exItem.count -= 1;
        exItem.totalPrice -= action.payload.price; // Ensure price is a number
      } else if (exItem) {
        console.warn("Cannot decrease count below 1.");
      } else {
        console.warn("Item not found in cart for decrease operation.");
      }
    },

    removeItem(state, action: PayloadAction<Product>) {
      state.products = state.products.filter(
        (item) => item.product.id !== action.payload.id
      );
    },
    cleanUpCart(state) {
      state.products = [];
    },
  },
});

// Export actions and reducer
export const { addCart, removeItem, increase, decrease, cleanUpCart } =
  cartSlice.actions;
export default cartSlice.reducer;

