import {CREATE_PERSON, FETCH_PERSONS} from "./types";

const initialState = {
  fetchedPersons: [],
}

export const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PERSON:
      return { ...state, persons: state.persons.concat([action.payload]) }
    case FETCH_PERSONS:
      return { ...state, fetchedPersons: action.payload }
    default: return state
  }
}
