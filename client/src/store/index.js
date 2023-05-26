import { configureStore } from "@reduxjs/toolkit";
import instructorReducer from './Instructor'
export const store = configureStore({
    reducer:{instructor: instructorReducer}
})