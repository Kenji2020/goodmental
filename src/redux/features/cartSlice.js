import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  message:false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,{payload}) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === payload.id);
      if(itemIndex >= 0){
          alert('This course already added to your cart');
          state.message = false;
      }
      else {
        state.cartItems.push(payload);
        state.message = true;
      }
    },

    removeToCart:(state,{payload}) => {
      state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
    }

  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeToCart} = cartSlice.actions

export default cartSlice.reducer