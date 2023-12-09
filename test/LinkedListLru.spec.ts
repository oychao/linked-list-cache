import { assert } from 'chai';
import { LinkedListLru } from '../src/LinkedListLru';

describe('LinkedListLru', () => {
  const origin = [0, 1, 2, 3, 3];
  const lruResult = [3, 2, 1, 0];

  let list: LinkedListLru<number>;

  beforeEach(() => {
    list = LinkedListLru.from(origin);
  });

  it('should create a lru linked list by #from', () => {
    list.forEach((item, index) => {
      assert.equal(item, lruResult[index]);
    });
  });

  it('should be able to push a new value in lru way', () => {
    list.push(5);
    assert.equal(list.first(), 5);
  });

  it('size should be correct', () => {
    assert.equal(list.size, 4);
  });
});
