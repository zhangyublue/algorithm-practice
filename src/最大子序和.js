/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/

console.log("最大子序和", "*************************");

function maxSuborderSum(data) {
  let min;
  let value;
  let sum;
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      min = data[0];
      sum = data[0];
      value = data[0];
    } else {
      sum += data[i];
      if (sum < min) {
        min = sum;
      }

      if (sum - min > value) {
        value = sum - min;
      }
    }
  }

  return value;
}

function maxSuborderSum1(data) {
  let currentMax;
  let max;
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      currentMax = data[0];
      max = data[0];
    } else {
      if (data[i] > data[i] + currentMax) {
        currentMax = data[i];
      } else {
        currentMax = currentMax + data[i];
      }

      if (currentMax > max) {
        max = currentMax;
      }
    }
  }
  return max;
}

console.log(maxSuborderSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSuborderSum1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
