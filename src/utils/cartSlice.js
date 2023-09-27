import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    selectedButton: "",
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((list) => list.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    selectItemType: (state, action) => {
      state.selectedButton = action.payload;
    },
    addAmount: (state, action) => {
      state.totalAmount = state.totalAmount + action.payload;
    },
    removeAmount: (state, action) => {
      if (state.totalAmount > 0) {
        state.totalAmount = state.totalAmount - action.payload;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  selectItemType,
  addAmount,
  removeAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
