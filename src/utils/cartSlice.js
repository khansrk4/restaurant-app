import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    selectedButton: "",
  },
  reducers: {
    addItem: (state, action) => {
      console.log(
        // state.items.filter((list) => list.id !== action.payload.id),
        "REDUCER",
        state
      );
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log(
        // state.items.filter((list) => list.id !== action.payload.id),
        "REDUCER",
        state
      );
      state.items = state.items.filter((list) => list.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    selectItemType: (state, action) => {
      state.selectedButton = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, selectItemType } =
  cartSlice.actions;
export default cartSlice.reducer;
