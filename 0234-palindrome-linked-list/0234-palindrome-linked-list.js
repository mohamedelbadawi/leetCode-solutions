/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow=head
    let fast=head
    let cnt=0
    //slow is the middle
    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
    }
//reverse
    prev=null
    while(slow){
        tmp=slow.next
        slow.next=prev
        prev=slow
        slow=tmp
    }
let left=head
let right= prev
while (right)
    {if(left.val!=right.val)
        return false
    right=right.next
    left=left.next
    }
    return true
};
