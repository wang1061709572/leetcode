/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (head === null) {
        return head;
    }
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let node = head;
    let next = head.next;
    while (next !== null) {
        if (node.val <= next.val) {
            node = node.next;
        } else {
            let prev = dummyHead;
            // 寻找next节点插入的位置，即从头部遍历，大于prev的值小于prev.next的值
            while (prev.next.val <= next.val) {
                prev = prev.next;
            }
            // 此处举例：4123
            // node: 423
            // 将未插入之前的next的余下列表赋值给node.next,
            // 把将要插入的节点从原列表分离
            node.next = next.next;
            // 将next节点插入 prev: 0423 next: 123 ==> 1423
            next.next = prev.next;
            // prev: 0423, next: 1423, prev => 01423
            prev.next = next;
        }
        next = node.next;
    }
    return dummyHead.next;
};
