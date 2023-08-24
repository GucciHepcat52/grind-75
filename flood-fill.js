function floodFill(image, sr, sc, color) {
  if (image === null || image.length < 1 || image[sr][sc] === color) {
    return image;
  }

  const initialColor = image[sr][sc];

  fill(image, sr, sc, color, initialColor);

  return image;
}

function fill(image, r, c, color, initialColor) {
  if (
    r < 0 ||
    r >= image.length ||
    c < 0 ||
    c >= image[0].length ||
    initialColor !== image[r][c]
  ) {
    return;
  }

  image[r][c] = color;

  fill(image, r - 1, c, color, initialColor);
  fill(image, r + 1, c, color, initialColor);
  fill(image, r, c - 1, color, initialColor);
  fill(image, r, c + 1, color, initialColor);
}
