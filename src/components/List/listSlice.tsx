import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  itemCount: number;
  items: {
    itemId: number;
    name: string;
    weight: number;
    favourite: boolean;
  }[];
}

const initialState: CounterState = {
  itemCount: 0,
  items: [],
};

export const listStateSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (
      state,
      action: PayloadAction<{
        itemId: number;
        name: string;
        weight: number;
        favourite: boolean;
      }>
    ) => {
      const { payload } = action;

      state.items.push(payload);
    },
    incrementCount: (state) => {
      state.itemCount++;
    },
    updateItem: (
      state,
      action: PayloadAction<{
        itemId: number;
        name: string;
        weight: number;
        favourite: boolean;
      }>
    ) => {
      const { itemId, name, weight, favourite } = action.payload;
      
      const index = state.items.findIndex((item) => item.itemId === itemId);

      const newPayload = {
        itemId,
        name,
        weight: Number(weight),
        favourite
      }

      state.items[index] = newPayload;

    },
    deleteItem: (
      state,
      action: PayloadAction<{
        itemId: number;
      }>
    ) => {
      // Delete from State
      const deleteId = action.payload.itemId;
      state.items = state.items.filter((item) => item.itemId !== deleteId);
      
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToList,
  incrementCount,
  updateItem,
  deleteItem,
} = listStateSlice.actions;

export default listStateSlice.reducer;
