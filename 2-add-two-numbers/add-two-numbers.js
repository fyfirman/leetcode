/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const stack = [l1];
    const stack2 = [l2];
    const sumNode = new ListNode();
    let latestNode = sumNode;

    while(stack.length !== 0 || stack2.length !== 0){
        const node1 = stack.pop();
        const node2 = stack2.pop();

        if(node1 && node1.next){
            stack.push(node1.next);
        }
        if(node2 && node2.next){
            stack2.push(node2.next);
        }
    
        const sum = (node1?.val ?? 0) + (node2?.val ?? 0) + latestNode.val;

        latestNode.val = sum % 10;

        if(stack.length > 0 || stack2.length > 0 || sum > 9){
            latestNode.next = new ListNode(sum > 9 ? 1 : 0);
            latestNode = latestNode.next;
        }
    }

    return sumNode


};