import { combineReducers } from "redux";
import { logReducer } from "./logReducer";
import { summaryReducer } from "./summaryReducer";

export const reducer = combineReducers({
  log: logReducer,
  summary: summaryReducer
});
