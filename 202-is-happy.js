function isHappy(n) {
  if (n === 1) {
    return true;
  }
  let slow = n;
  let fast = multiplyNum(n);
  let result = false;

  while (slow !== fast) {
    slow = multiplyNum(slow);
    fast = multiplyNum(multiplyNum(fast));

    if (fast === 1) {
      result = true;
      break;
    }
  }
  return result;
}

isHappy(19);

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function (n) {
//   let hs = new Set();

//   while (!hs.has(n)) {
//     hs.add(n);

//     n = multiplyNum(n);
//     if (n == 1) return true;
//   }

//   return false;
// };

function multiplyNum(num) {
  let result = 0;

  while (num !== 0) {
    let digit = num % 10;
    digit = Math.pow(digit, 2);
    result += digit;
    num = Math.floor(num / 10);
  }

  return result;
}
