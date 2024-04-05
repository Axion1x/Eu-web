import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  studentName: "",
  studentSpec: "",
  studentYear: "",
}

export const inputDataSlice = createSlice({
  name: 'inputData',
  initialState,
  reducers: {
    inputName: (state, action) => {
     state.studentName = action.payload;
    },
    inputYear: (state, action) => {
     state.studentYear = action.payload;
    },
    inputSpec: (state, action) => {
     state.studentSpec = action.payload;
    },
  },
})

export const { inputName, inputYear, inputSpec } = inputDataSlice.actions;
export default inputDataSlice.reducer;