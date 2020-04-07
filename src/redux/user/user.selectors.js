import { createSelector } from "reselect";

const selecetUser = state => state.user;

export const selecetCurrentUser = createSelector(
    [selecetUser],
    (user, cart) => user.currentUser
)

