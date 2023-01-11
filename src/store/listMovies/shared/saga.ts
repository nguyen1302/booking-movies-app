import { call, put, takeLatest, all } from "redux-saga/effects";
import { actions } from "./slice";
import { BookingHttp } from "../services/apimovies";

const movieHttp = new BookingHttp();

export function* getListMovie(api, action) {
  const result = yield call(api.getListMovie, action.payload);
  console.log(result, 'asdadasd');
  try {
    if (result.ok) {
      yield put(actions.getListMovieSuccess(result.data));
    }
  } catch (error) {}
}

export function* ListMovieSaga() {
  yield all([
    yield takeLatest(actions.getListMovie.type, getListMovie, movieHttp),
  ]);
}
