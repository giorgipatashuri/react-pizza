import { createSlice } from '@reduxjs/toolkit';

export interface IcartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: string;
  type: string;
  indificator: string;
  count: number;
}

export interface IcartSliceState {
  categoryId: number;
  cartItems: Array<IcartItem>;
  totalPrice: number;
  totalAmount: number;
}

const initialState: IcartSliceState = {
  categoryId: 0,
  cartItems: [],
  totalPrice: 0,
  totalAmount: 0,
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
        console.log('test');
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalAmount = state.cartItems.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.indificator !== action.payload.indificator,
      );
      state.totalAmount = state.cartItems.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    clearCartItems(state) {
      state.cartItems = [];
      console.log(state.cartItems);
    },
    descrAmount(state, action) {
      const findItem = state.cartItems.find(
        (obj) => obj.indificator === action.payload.indificator,
      );
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        }
      }
      state.totalAmount = state.cartItems.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});
export const {
  addCartItem,
  descrAmount,
  removeCartItem,
  setTotalPrice,

  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
