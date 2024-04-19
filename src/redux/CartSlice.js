import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('productsInCart')) || [], // Retrieve existing data from localStorage
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('productsInCart', JSON.stringify(state.items));
    },
    
    removeItem(state, action) {
      const idToRemove = action.payload;
      const indexToRemove = state.items.findIndex(item => item.id === idToRemove);
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
        localStorage.setItem('productsInCart', JSON.stringify(state.items));
      }
    },
    
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        localStorage.setItem('productsInCart', JSON.stringify(state.items));
      }
    },
    
    clearCart(state) {
      state.items = [];
      localStorage.removeItem('productsInCart');
    },
    
    calculateTotal(state) {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
