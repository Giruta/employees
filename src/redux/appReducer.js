import {HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, ACTIVE, NOT_ACTIVE} from "./types";

const initialState = {
  loading: false,
  alert: null,
  active: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {state, loading: false}
    case SHOW_ALERT:
      return {...state, alert: action.payload}
    case HIDE_ALERT:
      return {state, alert: null}
    case ACTIVE:
      return {state, active: true}
    case NOT_ACTIVE:
      return {state, active: false}
    default: return state
  }
}
