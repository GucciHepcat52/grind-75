function levelOrder(root) {
  if (root === null) return [];

  let res = [];
  let queue = [root];

  while (queue.length) {
    let levelArray = [];
    let levelSize = queue.length;
    while (levelSize) {
      let current = queue.shift();

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      levelArray.push(current.val);
      levelSize--;
    }
    res.push(levelArray);
  }

  return res;
}
