/*
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？
*/

console.log("对称二叉树", "*************************");

function check(data) {
  let i = 0;
  let layers = 0;
  while (i < data.length) {
    let leftIndex = i;
    let rightIndex = i * 2;
    let result = true;
    while (rightIndex > leftIndex && result) {
      if (data[leftIndex] === data[rightIndex]) {
        rightIndex--;
        leftIndex++;
      } else {
        result = false;
      }
    }
    if (!result) {
      return false;
    }
    layers++;
    i = 2 ** layers - 1;
  }
  return true;
}

console.log(check([1, 2, 2, 3, 4, 4, 3]));
console.log(check([1, 2, 2, null, 3, null, 3]));
