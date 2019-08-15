const chunkArray = require('./chunk');

test('chunkArray function exists', () =>{
  expect(chunkArray).toBeDefined();
})

test('Chunk an array of 10 values wiht length of 2', ()=>{
  const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2; 
  const chunkedArr = chunkArray(arrNumbers, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
})

test('Chunk an array of 3 values wiht length of 1', ()=>{
  const arrNumbers = [1, 2, 3];
  const len = 1; 
  const chunkedArr = chunkArray(arrNumbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3]])
})