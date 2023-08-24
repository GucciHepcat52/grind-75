function addBinary(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    const numA = i >= 0 ? parseInt(a[i]) : 0;
    const numB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = numA + numB + carry;
    result += sum % 2;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  if (carry > 0) {
    result += carry;
  }
  return result.split("").reverse().join("");
}

addBinary("1010", "1011");
