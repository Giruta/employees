import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_PERSONS, REQUEST_PERSON} from "./types";
import {hideLoader, showLoader, showAlert} from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PERSON, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPersons)
    yield put({ type: FETCH_PERSONS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
    yield put(hideLoader())
  }
}

async function fetchPersons() {
  const response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
  return await response.json()
}
