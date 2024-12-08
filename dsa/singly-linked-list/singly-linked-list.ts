export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    if (!this.head || index > this.size) return -1;

    let counter = 0;
    let currentNode = this.head;

    // iterate to the next node, until we find the node we want
    while (counter !== index && currentNode) {
      counter++;
      currentNode = currentNode.next;
    }

    if (!currentNode) return -1;

    return currentNode.value;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val: number): void {
    this.size++;

    const previousHead = this.head;

    this.head = new ListNode(val, previousHead || null);

    if (!this.tail) {
      this.tail = this.head;
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val: number): void {
    this.size++;

    if (this.head && this.tail) {
      this.tail.next = new ListNode(val, null);
      this.tail = this.tail.next;
    } else {
      /*
        ensure that when there is only one node,
        that node is both the head and the tail.
      */
      this.tail = new ListNode(val, null);
      this.head = this.tail;
    }
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index: number): boolean {
    if (index > this.size || this.size === 0) return false;

    let counter = 1;
    let currentNode = this.head;

    if (index === 0) {
      if (!currentNode?.next) {
        this.head = null;
        this.tail = null;
        this.size = 0;

        return true;
      } else {
        this.head = this.head!.next;
        this.size--;
      }
    }

    while (counter !== index && currentNode?.next) {
      counter++;
      currentNode = currentNode.next;
    }

    if (counter === index && currentNode?.next) {
      if (currentNode.next === this.tail) {
        currentNode.next = null;
        this.tail = currentNode;
      } else {
        currentNode.next = currentNode.next.next;
      }

      this.size--;
      return true;
    }

    return false;
  }

  /**
   * @return {number[]}
   */
  getValues(): number[] {
    const values: number[] = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }
}
