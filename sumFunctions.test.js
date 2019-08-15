const sumFunctions = require('./sumFunctions');

//toBe
test('Add 2 + 2 to equal 4', ()=>{
  expect(sumFunctions.add(2,2)).toBe(4);
});

// not
test('Add 2 + 2 to NOT equal 5', ()=>{
  expect(sumFunctions.add(2,2)).not.toBe(5);
});

/**
 * CHECK FOR TRUTHY & FULSY VALUES
 * toBeNull matches only null
 * toBeundefined matches only of toBeUndefined
 * toBeDefined is the oppiste of toBeUndefined
 * toBeTruthy matches anything that an if statement treats as true
 * toBeFalsy matches anything that an if statement treats as false
 */

//toBeNull
test('Should be Null', ()=>{
  expect(sumFunctions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', ()=>{
  expect(sumFunctions.checkValue(null)).toBeFalsy(); //It can take values of null, 0, undefined
});

//toEqual or toStrictEqual
test('User Should be Mohamed Aldahoul object', ()=>{
  expect(sumFunctions.createUse()).toEqual({ // toStrictEqual can be used instead toEqual
    firstName: 'Mohamed',
    lastName: 'Aldahoul'
  })
});

// Less than and greated than toBeLessThan toBeLessThanOrEqual
test('Should be under 1600', ()=>{
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})

//Regex
test('There is not I in team', ()=>{
  expect('team').not.toMatch(/I/i);
})

//Arrays
test('Admin should be in usernames', ()=>{
  username = ['john', 'karan', 'admin'];
  expect(username).toContain('admin')
})

// working with async data

Promise
test('User Promise fetch name should be Leanne Graham', ()=>{
  expect.assertions(1);
  return sumFunctions.fetchUser()
    .then(data =>{
      expect(data.name).toEqual('Leanne Graham');
    })
})

// Async
test('User Async fetch name should be Leanne Graham', async ()=>{
  expect.assertions(1);
  const data = await sumFunctions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
})