
//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
    let res = new ListNode(0,null);
    let temp = res;
    let sum = 0;
    let carry = 0;
    while(l1||l2||carry){
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next
        }
        if (sum+carry>=10){
            sum =sum + carry -10;
            carry = 1
        }else{
            sum = sum+carry;
            carry = 0
        }

        temp.val = sum;
        sum = 0;
        if(l1||l2||carry){
            temp.next = new ListNode(0, null);
            temp = temp.next;
        }
    }
    return res;
}


// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   let res = new ListNode(0, null);
//   let temp = res;
//   let sum = 0;
//   let carry = 0;
//   while (l1 || l2 || carry) {
//     if (l1) {
//       sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2) {
//       sum += l2.val;
//       l2 = l2.next;
//     }
//     if (sum + carry >= 10) {
//       sum = sum + carry - 10;
//       carry = 1;
//     } else {
//       sum = sum + carry;
//       carry = 0;
//     }

//     temp.next = new ListNode(sum);
//     temp = temp.next;
//     sum = 0;
//   }
//   return res.next;
// }