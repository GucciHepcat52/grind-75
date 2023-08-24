function containsDuplicate(nums) {
  let set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

containsDuplicate([1, 2, 3, 1]);
