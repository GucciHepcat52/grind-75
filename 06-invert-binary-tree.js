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

//  /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}

//                 4
//             7       2
//         9      6  1   3
//  */
// var invertTree = function(root) {
//   //iterative - queue, data structure first in first out
//   // line - people enter line and then leave in order of entering
//   if(!root) return root;
//   let stack = [root];
//   while(stack.length > 0) {
//       let current = stack.pop();
//       console.log(current)
//       let temp = current.left;
//       current.left = current.right;
//       current.right = temp;
//       if(current.left){
//           stack.push(current.left);
//       }
//       if(current.right) {
//           stack.push(current.right);
//       }
//   }

//   return root;
// };
