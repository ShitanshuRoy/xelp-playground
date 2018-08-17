const ALPHABET_REGEX = /^[a-zA-Z ]+$/;
const NUMBER_REGEX = /^[0-9]+$/;

export function onlyAlphabetFunction(val) {
  if (val === "" || ALPHABET_REGEX.test(val)) {
    return true;
  } else {
    return false;
  }
}
export function onlyNumberFunction(val) {
  if (val === "" || NUMBER_REGEX.test(val)) {
    return true;
  } else {
    return false;
  }
}
