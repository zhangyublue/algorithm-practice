/*
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
*/

console.log("将有序数组转换为二叉搜索树", "*************************");

function foo(data) {
  const length = data.length;
  if (length === 0) return [];
  if (length === 1) return data;
  if (length === 2) return [data[1], data[0], null];
  const splitIndex = length % 2 === 1 ? (length - 1) / 2 : length / 2;
  const left = data.slice(0, splitIndex);
  const right = data.slice(splitIndex + 1, length);
  const leftData = foo(left);
  const rightData = foo(right);
  return [
    data[splitIndex],
    leftData[0],
    rightData[0],
    ...leftData.slice(1),
    ...rightData.slice(1),
  ];
}

console.log(foo([-10, -3, 0, 5, 9]));
