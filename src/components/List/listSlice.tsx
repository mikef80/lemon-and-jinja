import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ListState {
    listItems: {id: number, itemName: string, itemWeight: number, itemFavourite: boolean}[]
}

const initialState: ListState = {
    listItems: [
        {
            id: 0,
            itemName: 'Item1',
            itemWeight: 123,
            itemFavourite: true
        },
        {
            id: 1,
            itemName: 'Item2',
            itemWeight: 123,
            itemFavourite: false
      }
  ],
}

export const listStateSlice = createSlice({
  name: 'list',
  initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{id: number, itemName: string, itemWeight: number, itemFavourite: boolean}>) => {
            state.listItems.push(action.payload);
      },
  },
})

// Action creators are generated for each case reducer function
export const { addItem } = listStateSlice.actions

export default listStateSlice.reducer