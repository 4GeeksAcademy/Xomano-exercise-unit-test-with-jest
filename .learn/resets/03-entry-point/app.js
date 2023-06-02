// // this is my function that sums two numbers
// const sum = (a,b) => {
//   return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

// one euro is:
let oneEuroIs = {
  "JPY": 127.9, // japan yen
  "USD": 1.2, // us dollar
  "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar){
  const result = dollar * oneEuroIs.JPY;
  return result;
};

function fromEuroToDollar(euro){
  const result = euro * oneEuroIs.USD;
  return result;
};

function fromYenToPound(yen){
  const result = yen * oneEuroIs.GBP;
  return result;
};

// console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(3.5));
// console.log(fromYenToPound(1));

module.exports{fromEuroToDollar};
// module.exports{fromDollarToYen};
// module.exports{fromYenToPound};