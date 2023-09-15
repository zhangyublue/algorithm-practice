/**
   给定一个二叉树，找出其最大深度。

  二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

  说明: 叶子节点是指没有子节点的节点。

  示例：
  给定二叉树 [3,9,20,null,null,15,7]，

     3
    / \
   9  20
      /  \
    15   7
  返回它的最大深度 3 。
 */

console.log("二叉树的最大深度", "*************************");

function maxDepth(data, currentDepth, currentIndex) {
  if (data[currentIndex] === undefined || data[currentIndex] === null)
    return currentDepth - 1;
  const leftChildIndex = findLeftChildIndex(currentIndex, currentDepth);
  const rightChildIndex = leftChildIndex + 1;
  const left = maxDepth(data, currentDepth + 1, leftChildIndex);
  const right = maxDepth(data, currentDepth + 1, rightChildIndex);
  return Math.max(left, right);
}

function findLeftChildIndex(parentIndex, parentDepth) {
  const parentDepthLeftIndex = 2 ** (parentDepth - 1) - 1;
  const indexFromLeft2Right = parentIndex - parentDepthLeftIndex;
  const currentDepthLeftIndex = 2 ** parentDepth - 1;
  return currentDepthLeftIndex + 2 * indexFromLeft2Right;
}

console.log(maxDepth([3, 9, 20, null, null, 15, 7], 1, 0));
console.log(maxDepth([], 1, 0));
console.log(maxDepth([0], 1, 0));
console.log(maxDepth([0, null, 1], 1, 0));
console.log(maxDepth([0, 1, 1, 15, 7, null, null, 1], 1, 0));
