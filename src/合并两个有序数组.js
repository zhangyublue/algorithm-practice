/*
给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
*/
console.log("合并两个有序数组", "*************************");

function mergeArray(data1, data2, data1ElementCount, data2ElementCount) {
  let data1Index = data1ElementCount - 1;
  let data2Index = data2ElementCount - 1;

  for (let i = data2ElementCount + data1ElementCount - 1; i >= 0; i--) {
    console.warn(i);
    if (data1Index < 0) {
      data1[i] = data2[data2Index];
      data2Index--;
    } else if (data2Index < 0) {
      data1[i] = data1[data1Index];
      data1Index--;
    } else if (data1[data1Index] >= data2[data2Index]) {
      data1[i] = data1[data1Index];
      data1Index--;
    } else {
      data1[i] = data2[data2Index];
      data2Index--;
    }
  }
  return data1;
}

console.log(mergeArray([1, 2, 3, 6, 9, 9, 0, 0, 0], [2, 5, 6], 6, 3));
