import { createSlice } from "@reduxjs/toolkit";

const initState = {
  origin: null,
  destination: null,
  traveltimeinfomation: null,
};

const slice = createSlice({
  name: "navSlice",
  initialState: initState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfomation: (state, action) => {
      state.traveltimeinfomation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInfomation } =
  slice.actions;
export default slice.reducer;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selecTravelTimeInfo = (state) => state.nav.traveltimeinfomation;
