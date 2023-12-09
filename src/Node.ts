export class Node<T> {
  public next: Node<T> | null;
  public value: T;

  constructor(value: T) {
    this.value = value;
  }
}
