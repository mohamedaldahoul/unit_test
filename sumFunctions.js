const axios = require('axios')

//JSONPlaceholder: https://jsonplaceholder.typicode.com/

const sumFunctions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null, 
  checkValue: (x) => x,
  createUse: () =>{
    const user = {firstName: "Mohamed"};
    user['lastName'] = "Aldahoul";
    return user;
  },
  fetchUser: () =>
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch( err => 'error')
}

module.exports = sumFunctions
