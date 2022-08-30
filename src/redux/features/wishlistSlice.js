import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [],
  message:false,
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state,{payload}) => {
      const itemIndex = state.wishlistItems?.findIndex(item => item.id === payload.id);
      if(itemIndex >= 0){
        alert('You Are Already Added WishList This Item')
        state.message = false;
      }
      else {
        state.wishlistItems.push(payload);
        alert('This course added your wishlist items')
        state.message = true;
      }
    },
    removeWishList:(state,{payload}) => {
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const {addToWishList,removeWishList} = wishListSlice.actions

export default wishListSlice.reducer