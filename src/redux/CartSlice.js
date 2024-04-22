import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('productsInCart')) || [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += newItem.quantity || 1; // Increment by the quantity of the new item or default to 1
      } else {
        // If the item doesn't exist, add it to the cart with its quantity
        const quantityToAdd = newItem.quantity || 1; // Default to 1 if quantity is not provided
        state.items.push({ ...newItem, quantity: quantityToAdd });
      }
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
    
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
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

export const { increaseItemQuantity,decreaseItemQuantity,addItem, removeItem, updateQuantity, clearCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
