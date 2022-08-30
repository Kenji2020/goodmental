import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import userReducer from './features/userSlice';
import wishlistReducer from './features/wishlistSlice';

export const store = configureStore({
  reducer: {
    userInfo:userReducer,
    cart:cartReducer,
    wishlist:wishlistReducer,
  },
})