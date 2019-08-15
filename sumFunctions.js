const sumFunctions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null, 
  checkValue: (x) => x,
  createUse: () =>{
    const user = {firstName: "Mohamed"};
    user['lastName'] = "Aldahoul";
    return user;
  }
}

module.exports = sumFunctions
