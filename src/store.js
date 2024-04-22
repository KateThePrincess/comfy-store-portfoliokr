import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; //cartSlice

export const store = configureStore({
  reducer: {
    cartState: cartReducer, // we access the name cartState while using useSelector
  },
});
