class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
}

class _PriorityQueue{

  private nodes:Array<{val:number,node:ListNode|null}>;

  constructor(){
    this.nodes = [];
  }

  enqueue(val:number,node:ListNode|null){
    this.nodes.push({val:val, node:node});
    this.nodes.sort((a,b)=>a.val-b.val);
  }

  dequque(){
    return this.nodes.shift();
  }

  isEmpty(){
    return this.nodes.length !== 0;
  }

}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

  const dummyNode = new ListNode(-Number.MAX_VALUE)
  const current = dummyNode;
  const pq = new _PriorityQueue();

  for(let i=0; i<lists.length; i++){
    const list = lists[i];
    if(list!==null){
      pq.enqueue(list.val, list)
    }
  }

  while(!pq.isEmpty()){

    const smallestNode = pq.dequque();
    if(smallestNode !== undefined){
      const nextNode = smallestNode.node!.next
      current.next = new ListNode(smallestNode.val)
      if(nextNode !== null){

        pq.enqueue(nextNode.val, nextNode);

      }
    }
  }

  return dummyNode.next;

}
