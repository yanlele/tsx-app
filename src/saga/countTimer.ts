import {
  put,
  takeLatest,
  all,
  delay,
} from 'redux-saga/effects';
import {countTimerConst} from "../reducers/countTimer";
import API from "../server";

const {
  CT_SHOW,
  CT_HIDE,
  CT_SHOW_REQUEST,
} = countTimerConst;

function* setCountTimerShowRequest() {
  yield put({
    type: CT_SHOW,
  });
  yield delay(5000);
  yield put({
    type: CT_HIDE,
  });
}

function* setCountTimerShowRequestSaga() {
  yield takeLatest(CT_SHOW_REQUEST, setCountTimerShowRequest);
}

function* getProxyGithubApi() {
  let Promise = yield API.proxyGithubApi();
  console.log(Promise);
}

function* getProxyGithubApiSaga() {
  yield takeLatest('GET_WEATHER_PROXY', getProxyGithubApi);
}

export default function* countTimer() {
  yield all([
    getProxyGithubApiSaga(),
    setCountTimerShowRequestSaga(),
  ]);
}
