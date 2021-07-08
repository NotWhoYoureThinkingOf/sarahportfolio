import { createSlice } from "@reduxjs/toolkit";

export const menuOpenSlice = createSlice({
  name: "menuOpen",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    grabMenuOpen: (state) => {
      state.menuOpen = true;
    },
    releaseMenuOpen: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { grabMenuOpen, releaseMenuOpen } = menuOpenSlice.actions;

export const selectMenuOpen = (state) => state.menuOpen.menuOpen;

export default menuOpenSlice.reducer;
