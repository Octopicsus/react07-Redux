import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tobuyReducer from "./Store/features/tobuySlice";
import productsReducer from "./Store/features/productsSlice";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

export const store = configureStore({
  reducer: {
    cart: tobuyReducer,
    products: productsReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
