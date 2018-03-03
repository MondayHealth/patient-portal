import { USER_ACTION } from "./actions";

// noinspection JSUnusedGlobalSymbols
export function user(state = {}, action) {
  if (!action.type || action.type !== USER_ACTION) {
    return state;
  }

  return { ...state, user: action.user };
}
