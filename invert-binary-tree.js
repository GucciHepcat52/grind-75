function invertTree(root) {
  if (root === null) {
    return root;
  }

  invertTree(root.left);

  invertTree(root.right);

  const curr = root.left;
  root.left = root.right;
  root.right = curr;

  return root;
}

invertTree("asdf");
