import {
  DECREMENT_PAGE,
  INCREMENT_PAGE,
  SET_PAGE,
  SET_PAGE_MAX,
  SUBMIT_BEGIN,
  SUBMIT_ERROR,
  SUBMIT_SUCCESS,
  UPDATE_FIELD,
  UPDATE_FIELD_VALIDITY,
  UPDATE_LOCATION,
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

const initialFieldState = {};

// noinspection JSUnusedGlobalSymbols
export function formFields(state = initialFieldState, action) {
  if (!action.type || action.type !== UPDATE_FIELD) {
    return state;
  }

  return { ...state, [action.key]: action.value };
}

const initialSubmissionState = {
  state: "unsubmitted",
  values: null
};

// noinspection JSUnusedGlobalSymbols
export function submission(state = initialSubmissionState, action) {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case SUBMIT_BEGIN:
      return { ...state, state: "submitted", values: action.values };
    case SUBMIT_ERROR:
      return { ...state, state: "error", error: action.error };
    case SUBMIT_SUCCESS:
      return { ...state, state: "success" };
    default:
      return state;
  }
}

// noinspection JSUnusedGlobalSymbols
export function invalidFields(state = {}, action) {
  if (!action.type || action.type !== UPDATE_FIELD_VALIDITY) {
    return state;
  }

  if (!action.valid) {
    return { ...state, [action.fieldName]: true };
  }

  const fName = action.fieldName;

  if (state.hasOwnProperty(fName)) {
    const ret = { ...state };
    delete ret[fName];
    return ret;
  } else {
    return state;
  }
}

const initialLocationState = {
  params: {}
};

export function location(state = initialLocationState, action) {
  if (!action.type || action.type !== UPDATE_LOCATION) {
    return state;
  }

  if (!action.location.search) {
    return state;
  }

  const search = action.location.search
    .trim()
    .substr(1)
    .replace("+", " ");

  const tokens = decodeURIComponent(search).split("&");
  const pairs = tokens.map(val => val.split("="));
  const ret = {};

  pairs.forEach(([key, value]) => (ret[key] = value));

  return { ...state, params: ret };
}
