import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const selectAvailableProducts = (state) => {
  const cartItemId = state.cart.data.map((item) => item.id);
  console.log(cartItemId)

  return state.products.items.filter(
    (product) => !cartItemId.includes(product.id)
  );
};

export default productsSlice.reducer;
