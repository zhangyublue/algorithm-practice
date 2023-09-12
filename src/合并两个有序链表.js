/*
将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

*/

console.log('合并两个有序链表', '*************************')


const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
    },
  },
};

const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 5
      }
    },
  },
};


function merge (l1, l2) {
  if (l1 !== undefined) {
    if (l2 !== undefined) {
      if (l1.val < l2.val) {
        return {
          val: l1.val,
          next: merge(l1.next, l2)
        }
      } else {
        return {
          val: l2.val,
          next: merge(l2.next, l1)
        }
      }
    } else {
      return {
        val: l1.val,
        next: merge(l1.next, l2)
      }
    }
  } else {
    if (l2 !== undefined) {
      return {
        val: l2.val,
        next: merge(l2.next, l1)
      }
    } else {
      return undefined
    }
  }
}

const result = merge(l1, l2)

console.log(result);



