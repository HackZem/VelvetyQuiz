import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TModal = "loginModal" | "registrationModal";

interface IModalsStateSlice {
  loginModal: boolean;
  registrationModal: boolean;
}

const initialState: IModalsStateSlice = {
  loginModal: false,
  registrationModal: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<TModal>) => {
      state = { ...initialState };
      state[action.payload] = true;
      return state;
    },
    hideModals: (_) => {
      return initialState;
    },
  },
});

export const { showModal, hideModals } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
