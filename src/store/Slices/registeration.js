import { createSlice } from "@reduxjs/toolkit";

const registerationSlice = createSlice({
  name: "registeration",
  initialState: {
    registration: {
      fullName: "",
      email: "",
      userName: "",
      password: "",
    },
  },
  reducers: {
    setRegistrationData: (state, action) => {
      state.registration = action.payload;
    },
    setLogout: (state) => {
      state.registration = {
        fullName: "",
        email: "",
        userName: "",
        password: "",
      };
    },
    asfIfRegisted: (state) => {
      return console.log(state.registration.fullName);
    },
  },
});

export const { setRegistrationData, setLogout, asfIfRegisted } =
  registerationSlice.actions;
export default registerationSlice.reducer;
