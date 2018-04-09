const test = require('tape');
const main = require('./index');

const a1 = [1,2,3,4,5,6,7,8,9,10];
const a2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const a3 = Array.apply(null, {length: 500}).map(() => Math.ceil(Math.random() * 300)).sort((a,b) => a - b);


test('it should find n element in test array a1', (t) => {
  const item = 8;
  const min = 0;
  const max = a1.length - 1;
  const res = main.main(a1, item, min, max);
  const expected = item;
  t.deepEqual(res, expected);
  t.end();
})

test('it should find n element in test array a2', (t) => {
  const item = 'k';
  const min = 0;
  const max = a2.length - 1;
  const res = main.main(a2, item, min, max);
  const expected = item;
  t.deepEqual(res, expected);
  t.end();
})

test('it should find n element in test array a3', (t) => {
  const item = 298;
  const min = 0;
  const max = a3.length - 1;
  const res = main.main(a3, item, min, max);
  const expected = item;
  t.deepEqual(res, expected);
  t.end();
})