import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('productsInCart')) || [],
  },
  reducers: {

    addItem(state, action) {
      const check = state.items.findIndex(book => book.id === action.payload.id)
      if (check !== -1) {
        state.items[check].quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
      localStorage.setItem('productsInCart', JSON.stringify(state.items));
      state.total = state.items.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
    },
    updateQuantity(state, action) {
      const check = state.items.findIndex(book => book.id === action.payload.id)
      if (check !== -1) {
        state.items[check].quantity = action.payload.quantity
      }
      localStorage.setItem('productsInCart', JSON.stringify(state.items));
      state.total = state.items.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(book => book.id !== action.payload.id)
      state.total = state.items.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
      
    }
  },
});

export const { addItem, removeItem, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;
