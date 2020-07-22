export const getJson = (key) =>
  (typeof window !== "undefined" && JSON.parse(localStorage.getItem(key))) ||
  null;

export const setJson = (key, value) =>
  typeof window !== "undefined" &&
  localStorage.setItem(key, JSON.stringify(value));
