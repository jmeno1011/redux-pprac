import { combineReducers } from "redux";
import counter from "./counter";
import todo from "./todo";
import post from "./post";

const rootReducer = combineReducers({
  counter,
  todo,
  post,
});

export default rootReducer;
