import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

type collapsibleState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
} as collapsibleState;

const collapsibleSlice = createSlice({
  name: "collapsible",
  initialState,
  reducers: {
    reset: () => initialState,
    openCollapsible: (state) => {
      state.isOpen = true;
    },
    closeCollapsible: (state) => {
      state.isOpen = false;
    },
    toggleCollapsible: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openCollapsible, closeCollapsible, toggleCollapsible, reset } =
  collapsibleSlice.actions;

export default collapsibleSlice.reducer;
