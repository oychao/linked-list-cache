import { AbstractLinkedList } from './AbstractLinkedList';

export class LinkedListLru<T> extends AbstractLinkedList<T> {
  constructor() {
    super();
  }

  public push(value: T) {
    if (this.isHead(value)) {
      return;
    }

    const prev = this.findPrev(value);

    if (!prev) {
      this.unshift(value);
      return;
    }

    const target = prev.next;
    prev.next = target.next;

    target.next = this.head;
    this.head = target;
  }
}
