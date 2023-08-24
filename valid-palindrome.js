function isPalindrome(string) {
  let lowercaseString = string.toLowerCase();
  let splitString = lowercaseString.split("");
  let stringArray = [];

  splitString.forEach((item, index) => {
    if (isAlphanumeric(item)) {
      stringArray.push(splitString[index]);
    }
  });

  let joinedString = stringArray.join("");

  if (joinedString.length === 0) {
    return true;
  }

  let mid = Math.floor(joinedString.length / 2);

  for (let i = 0; i < mid; i++) {
    if (joinedString[i] !== joinedString[joinedString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function isAlphanumeric(element) {
  return /^[a-zA-Z0-9]+$/.test(element);
}

isPalindrome("A man, is a person");
