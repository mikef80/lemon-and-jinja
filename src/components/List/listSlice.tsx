import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    itemCount: number
    items: {
        id: number,
        itemName: string,
        itemWeight: number,
        itemFavourite: boolean;
    }[];
}

const initialState: CounterState = {
    itemCount: 0,
    items: [],
};

export const listStateSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<{
            id: number,
            itemName: string,
            itemWeight: number,
            itemFavourite: boolean;
        }>) => {
            state.items.push(action.payload);
        },
        incrementCount: (state) => {
            state.itemCount++;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToList, incrementCount } = listStateSlice.actions;

export default listStateSlice.reducer;