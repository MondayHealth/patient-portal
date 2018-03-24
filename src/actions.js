export const USER_ACTION = "USER_ACTION";

export const SET_PAGE = "SET_PAGE";
export function setPage(index) {
  return { type: SET_PAGE, index };
}

export const INCREMENT_PAGE = "INCREMENT_PAGE";
export function incrementPage() {
  return { type: INCREMENT_PAGE };
}

export const DECREMENT_PAGE = "DECREMENT_PAGE";
export function decrementPage() {
  return { type: DECREMENT_PAGE };
}

export const SET_PAGE_MAX = "SET_PAGE_MAX";
export function setPageMax(max) {
  return { type: SET_PAGE_MAX, max };
}

export const UPDATE_FIELD = "UPDATE_FIELD";
export function updateField(key, value) {
  return { type: UPDATE_FIELD, key, value };
}

export const SUBMIT_BEGIN = "SUBMIT_BEGIN";
function submitAction(values) {
  return { type: SUBMIT_BEGIN, values: values };
}

export const SUBMIT_ERROR = "SUBMIT_ERROR";
function submitError(error) {
  return { type: SUBMIT_ERROR, error: error };
}

export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
function submitSuccess() {
  return { type: SUBMIT_SUCCESS };
}

const SUBMIT_ENDPOINT = "https://api.monday.health/patient/submit";

export function post(data) {
  const request = new XMLHttpRequest();
  request.open("POST", SUBMIT_ENDPOINT, true);

  return new Promise((resolve, reject) => {
    request.onload = () =>
      request.status >= 200 && request.status < 400
        ? resolve(request.status)
        : reject(request.status);

    request.onerror = () => reject(-1);

    request.send(data);
  });
}

export function submit(dispatch) {
  return function submitClosure(values) {
    dispatch(submitAction(values));

    return post(JSON.stringify(values))
      .then(result => dispatch(submitSuccess(result)))
      .catch(error => dispatch(submitError(error)));
  };
}
