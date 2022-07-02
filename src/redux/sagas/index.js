import { put, takeEvery, all } from "redux-saga/effects";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(3000)
  yield put({ type: 'INCREMENT' })
  yield put({ type: 'FINISH INCREMENT ASYNC' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    helloSaga()
  ]);
}