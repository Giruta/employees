import {REQUEST_PERSON, SHOW_LOADER, HIDE_LOADER, CREATE_PERSON,
  SHOW_ALERT, HIDE_ALERT, ACTIVE, NOT_ACTIVE} from "./types";

export function fetchPersons() {
  return {
    type: REQUEST_PERSON
  }
}

// export function createPerson(person) {
//   return {
//     type: CREATE_PERSON,
//     payload: person,
//   }
// }

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function active() {
  return {
    type: ACTIVE,
  }
}

export function notActive() {
  return {
    type: NOT_ACTIVE,
  }
}
