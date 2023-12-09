import { assert } from 'chai';
import { LinkedList } from '../src/LinkedList';

describe('LinkedList', () => {
  const origin = [0, 1, 2, 3, 4];
  let list: LinkedList<number>;

  beforeEach(() => {
    list = LinkedList.from(origin);
  });

  it('should create a linked list by #from', () => {
    list.forEach((item, index) => {
      assert.equal(item, origin[index]);
    });
  });

  it('should be able to push a new value', () => {
    list.push(5);
    assert.equal(list.last(), 5);
  });

  it('should support for of', () => {
    let i = 0;
    for (const item of list) {
      assert.equal(item, origin[i++]);
    }
  });

  it('size should be correct', () => {
    assert.equal(list.size, 5);
  });
});
