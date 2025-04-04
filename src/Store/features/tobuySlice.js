import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    return JSON.parse(savedCart);
  }

  return { data: [] };
};

const initialState = loadFromLocalStorage();

export const tobuySlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteItem: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, deleteItem } = tobuySlice.actions;

export default tobuySlice.reducer;
