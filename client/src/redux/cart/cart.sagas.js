import { all, takeLatest, call, put } from "redux-saga/effects";

import { clearCart } from "./cart.actions";

import UserActionTypes from "../user/user.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutStart)]);
}
