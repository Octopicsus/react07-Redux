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
  const cartItemIds = state.tobuy.data.map((item) => item.id);
  return state.products.items.filter(
    (product) => !cartItemIds.includes(product.id)
  );
};

export default productsSlice.reducer;
