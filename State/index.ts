import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   mode: "light",
  user: null,
  jobs: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setMode: (state) => {
    //   state.mode = state.mode === "light" ? "dark" : "light";
    // },
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
    },
    // setUserJobs: (state, action) => {
    //   if (state.user) {
    //     state.user.jobs = action.payload.jobs;
    //   } else {
    //     console.error("User jobs not found!");
    //   }
    // },
    setJobs: (state, action) => {
      state.jobs = action.payload.jobs;
    },
  },
});

export const { setLogin, setLogout, setJobs } = authSlice.actions;
export default authSlice.reducer;
