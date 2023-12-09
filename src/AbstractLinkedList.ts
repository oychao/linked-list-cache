import { Node } from './Node';

export abstract class AbstractLinkedList<T> {
  public static from<C extends AbstractLinkedList<T>, T>(
    this: new () => C,
    array: Array<T>
  ) {
    const list = new this();
    for (const value of array) {
      list.push(value);
    }
    return list;
  }

  protected head: Node<T>;
  protected tail: Node<T>;

  public size: number;

  constructor() {
    this.size = 0;
    this.head = this.tail = null;
  }

  public first() {
    return this.head.value;
  }

  public last() {
    return this.tail.value;
  }

  public push(value: T) {
    const node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }

    this.size += 1;
  }

  public unshift(value: T) {
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = this.tail = node;
    }

    this.size += 1;
  }

  public *[Symbol.iterator]() {
    let curr = this.head;
    while (curr) {
      yield curr.value;
      curr = curr.next;
    }
  }

  public forEach(
    callback: (item: T, index: number, list: AbstractLinkedList<T>) => void
  ) {
    let index = 0;
    for (const item of this) {
      callback.call(null, item, index++, this);
    }
  }

  protected findPrev(value: T) {
    let curr = this.head;

    while (curr) {
      if (Object.is(curr.next?.value, value)) {
        return curr;
      }
      curr = curr.next;
    }

    return null;
  }

  protected isHead(value: T) {
    return Object.is(this.head?.value, value);
  }
}
