function isBalanced(root) {
  if (root === null) {
    return true;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}
// Helper function to calculate the height of a node
function getHeight(node) {
  if (node === null) {
    return 0;
  }

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}
