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
