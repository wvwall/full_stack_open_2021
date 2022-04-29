import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    pushNotification(state, action) {
      return action.payload;
    },
    removeNotification(state, action) {
      return action.payload;
    },
  },
});

export const { pushNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
