/**
 * 148. 排序链表
 * https://leetcode-cn.com/problems/sort-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var merge = function(leftNode, rightNode) {
    const dummyHead = new ListNode(0);
    let temp = dummyHead, temp1 = leftNode, temp2 = rightNode;
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
    if (temp1 !== null) {
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return dummyHead.next;
}

var sortList = function(head) {
    console.log(head);
    let next = head.next;
    if (!next) return head;
    let fastNode = head;
    let slowNode = head;
    let node = new ListNode(0);
    let prevNode = node;
    while(fastNode && fastNode.next) {
        prevNode.next = new ListNode(slowNode.val);
        prevNode = prevNode.next;
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    prevNode = node.next;
    return merge(sortList(prevNode), sortList(slowNode));
};

let list = new ListNode(0);

[4, 2, 1, 3].reduce((prev, item) => prev.next = new ListNode(item), list);

console.log(sortList(list.next));
