function maxSlidingWindow(nums, k) {
  if (nums.length === 0) return [];

  let left = 0;
  let right = k - 1;

  let result = [];

  while (right < nums.length) {
    let window = nums.slice(left, right + 1);
    let max = Math.max(...window);
    result.push(max);
    left++;
    right++;
  }

  return result;
}

maxSlidingWindow([1, 3, -1, -1, 5, 3, 6, 7]);
