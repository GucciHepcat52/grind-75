function productExceptSelf() {
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    let j = 0;
    while (j < nums.length) {
      if (j === i) {
        j++;
      } else {
        prod = prod * nums[j];
        j++;
      }
    }
    final.push(prod);
  }
  return final;
}

productExceptSelf();
