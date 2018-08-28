export function onlyAlphabetFunction(val) {
  let onlyAlphabet = val.replace(
    /[0-9!@#$%^`~&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
    ""
  );
  return onlyAlphabet;
}
export function onlyNumberFunction(val) {
  let onlyNumber = val.replace(
    /[a-zA-Z!@#$%^`~&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
    ""
  );
  return onlyNumber;
}
export function onlyNumberAndAlphabet(val) {
  let onlyNumberAndAlphabet = val.replace(
    /[!@#$%^`~&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
    ""
  );
  return onlyNumberAndAlphabet;
}
