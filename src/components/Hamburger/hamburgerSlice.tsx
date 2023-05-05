import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  open: boolean
}

const initialState: CounterState = {
  open: false,
}

export const menuStateSlice = createSlice({
  name: 'menu',
  initialState,
    reducers: {
        toggle: (state) => {
            state.open = !state.open
      },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = menuStateSlice.actions

export default menuStateSlice.reducer