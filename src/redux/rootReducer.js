import {combineReducers} from "redux";
import {personsReducer} from "./personsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
  persons: personsReducer,
  app: appReducer,
})
