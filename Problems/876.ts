
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
       this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function middleNode(head: ListNode | null): ListNode | null {

  let length = 0;

  let current:ListNode | null = {...head!};

  while(current){

    length++;
    current = current.next;
  }

  if(length%2===1){

    let index =0;
    while(index<length/2-1){
      index ++
      head = head!.next;
    }
    return head;

  } else {

    let index=0;
    while(index!=length/2){
      index++
      head = head!.next
    }
    return head;
  }

}
