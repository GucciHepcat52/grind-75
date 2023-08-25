function kClosest(points, k) {
  const n = points.length;
  let map = [];

  for (let i = 0; i < n; i++) {
    map.push({ distance: dist(points[i]), points: points[i] });
  }

  map.sort((a, b) => a.distance - b.distance);

  let ans = [];

  for (let j = 0; j < k; j++) {
    ans.push(map[j].points);
  }

  return ans;
}

function dist(point) {
  return point[0] * point[0] + point[1] * point[1];
}

kClosest(
  [
    [-2, 10],
    [-4, -8],
    [10, 7],
    [-4, -7],
  ],
  3
);
