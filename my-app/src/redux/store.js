import { configureStore } from '@reduxjs/toolkit'
import  inputDataReducer from './features/inputdataSlice'
import marksReducer, { fetchMarks } from './features/marksSlice'
export const store = configureStore({
  reducer: {
    inputData: inputDataReducer,
    marks: marksReducer
  },
})

store.dispatch(fetchMarks)
