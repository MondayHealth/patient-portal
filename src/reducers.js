import {
  DECREMENT_PAGE,
  INCREMENT_PAGE,
  SET_PAGE,
  SET_PAGE_MAX,
  USER_ACTION
} from "./actions";

// noinspection JSUnusedGlobalSymbols
export function user(state = {}, action) {
  if (!action.type || action.type !== USER_ACTION) {
    return state;
  }

  return { ...state, user: action.user };
}

const initialPageState = {
  index: 0,
  max: 0
};

// noinspection JSUnusedGlobalSymbols
export function page(state = initialPageState, action) {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case SET_PAGE_MAX:
      if (action.max >= 0) {
        return { ...state, max: action.max };
      } else {
        return state;
      }
    case SET_PAGE:
      if (action.index >= 0 && action.index < state.max) {
        return { ...state, index: action.index };
      } else {
        return state;
      }
    case INCREMENT_PAGE:
      if (state.index + 1 < state.max) {
        return { ...state, index: state.index + 1 };
      } else {
        return state;
      }
    case DECREMENT_PAGE:
      if (state.index > 0) {
        return { ...state, index: state.index - 1 };
      } else {
        return state;
      }
    default:
      return state;
  }
}
