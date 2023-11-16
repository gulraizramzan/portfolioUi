import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import productSlice from './userSlice'

const rootReducer = combineReducers({
  product: productSlice,
  user: userSlice,

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
