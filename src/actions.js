import { event, exception } from "./gtag";

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

export const SUBMIT_REFERRAL_BEGIN = "SUBMIT_REFERRAL_BEGIN";
function submitReferralAction(values) {
  return { type: SUBMIT_REFERRAL_BEGIN, values: values };
}

export const SUBMIT_REFERRAL_ERROR = "SUBMIT_REFERRAL_ERROR";
function submitReferralError(error) {
  return { type: SUBMIT_REFERRAL_ERROR, error: error };
}

export const SUBMIT_REFERRAL_SUCCESS = "SUBMIT_REFERRAL_SUCCESS";
function submitReferralSuccess() {
  return { type: SUBMIT_REFERRAL_SUCCESS};
}

export const UPDATE_FIELD_VALIDITY = "UPDATE_FIELD_VALIDITY";
export function fieldValidity(valid, fieldName) {
  return { type: UPDATE_FIELD_VALIDITY, valid, fieldName };
}

export const UPDATE_LOCATION = "UPDATE_LOCATION";
export function updateLocation(location) {
  return { type: UPDATE_LOCATION, location };
}

const SUBMIT_ENDPOINT = "https://api.monday.health/patient/submit";

export function post(data, customEndpoint) {
  const target = customEndpoint
    ? "https://api.monday.health/patient/" + customEndpoint
    : SUBMIT_ENDPOINT;

  const request = new XMLHttpRequest();
  request.open("POST", target, true);

  request.setRequestHeader("Content-type", "application/json");

  return new Promise((resolve, reject) => {
    request.onload = () =>
      request.status >= 200 && request.status < 400
        ? resolve(request.responseText)
        : reject(request.status);

    request.onerror = () => reject(-1);

    request.send(data);

    event("send", customEndpoint ? customEndpoint : "form", "xhr", 1, true);
  });
}

const EMAIL_ENDPOINT = "referral/submit";

export function submitReferral(dispatch) {
  return function submitReferralClosure(values) {
    dispatch(submitReferralAction(values));

    return post(JSON.stringify(values), EMAIL_ENDPOINT)
      .then(result => {
        const parsed = JSON.parse(result);
        if (!parsed || parsed.success !== true) {
          const msg = "invalid response: " + result;
          exception(msg, true);
          dispatch(submitReferralError(msg));
        } else {
          event("success", "referral", "received result", 2, true);
          dispatch(submitReferralSuccess(result));
        }
      })
      .catch(error => {
        exception(error, true);
        dispatch(submitError(error));
      });
  };
}

export function submit(dispatch) {
  return function submitClosure(values) {
    dispatch(submitAction(values));

    return post(JSON.stringify(values))
      .then(result => {
        const parsed = JSON.parse(result);
        if (!parsed || parsed.success !== true) {
          const msg = "invalid response: " + result;
          exception(msg, true);
          dispatch(submitError(msg));
        } else {
          event("success", "form", "received result", 2, true);
          dispatch(submitSuccess(result));
        }
      })
      .catch(error => {
        exception(error, true);
        dispatch(submitError(error));
      });
  };
}
