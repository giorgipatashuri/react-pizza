import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  cartItems: [],
  totalPrice: 0,
  totalAmmout: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      const findItem = state.cartItems.find(
        (obj) => obj.indificator === action.payload.indificator,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
        console.log('false');
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.indificator !== action.payload.indificator,
      );
    },
    clearCartItems(state) {
      state.cartItems = [];
    },
    descrAmmout(state, action) {
      const findItem = state.cartItems.find(
        (obj) => obj.indificator === action.payload.indificator,
      );
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        }
      }
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});
export const { addCartItem, incAmmout, descrAmmout, removeCartItem, setTotalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
