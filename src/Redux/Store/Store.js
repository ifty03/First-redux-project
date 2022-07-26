import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../Redux/state/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
