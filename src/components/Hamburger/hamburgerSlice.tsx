import { createSlice } from '@reduxjs/toolkit';

export interface HamburgerState {
  open: boolean
}

const initialState: HamburgerState = {
  open: false,
}

export const hamburgerStateSlice = createSlice({
  name: 'hamburger',
  initialState,
    reducers: {
        toggle: (state) => {
            state.open = !state.open
      },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = hamburgerStateSlice.actions

export default hamburgerStateSlice.reducer