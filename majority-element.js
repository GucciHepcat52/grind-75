function majorityElement(nums) {
  let map = {};
  let majority = 0;

  for (const number of nums) {
    map[number] = (map[number] || 0) + 1;
  }

  for (const [key, value] of Object.entries(map)) {
    if (value > nums.length / 2 && value > majority) {
      majority = parseInt(key);
    }
  }

  return majority;
}

majorityElement([2, 2, 1, 1, 1, 2, 2]);
