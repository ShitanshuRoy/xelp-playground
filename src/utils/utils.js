const ALPHABET_REGEX = /^[a-zA-Z ]+$/;
const NUMBER_REGEX = /^[0-9]+$/;
export function onlyAlphabet(val) {
  if (val === "" || ALPHABET_REGEX.test(val)) {
    return true;
  } else {
    return false;
  }
}
export function onlyNumber(val) {
  if (val === "" || NUMBER_REGEX.test(val)) {
    return true;
  } else {
    return false;
  }
}
