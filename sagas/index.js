import { all, fork, call, take, put, takeEvery, delay } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}
function* logIn(action) {
  try {
    yield delay(1000);
    // const result = yield call(logInAPI, action.data);  // yield는 await과 비슷하다.
    yield put({
      type: "LOG-IN_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}
function logOutAPI() {
  return axios.post("/api/logout");
}
function* logOut() {
  try {
    yield delay(1000);
    // const result = yield call(logOutAPI); 
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/post", data);
}
function* addPost(action) {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}
function* watchLogIn() {
    yield takeEvery("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
    yield takeEvery("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
    yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
