import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
import formSlice from '../reducers/inputSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form:  formSlice
  },
})