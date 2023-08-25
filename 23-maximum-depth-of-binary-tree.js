function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let leftOfTree = dfs(root.left);
  let rightOfTree = dfs(root.right);

  return Math.max(leftOfTree + 1, rightOfTree + 1);
}

function dfs(node) {
  if (!node) {
    return 0;
  }

  let maximum = 0;

  let left = dfs(node.left);
  let right = dfs(node.right);

  maximum = Math.max(left, right);

  return maximum + 1;
}
