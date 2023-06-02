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
let oneDollarIs = {
  "JPY": 110.0, // Japanese Yen
  "EUR": 0.91, // Euro
  "GBP": 0.79, // British Pound
};

let oneYenIs = {
  "USD": 0.0091, // US Dollar
  "EUR": 0.008, // Euro
  "GBP": 0.007, // British Pound
};

function fromEuroToDollar(euro){
  const result = euro * oneEuroIs.USD;
  return result;
};

function fromDollarToYen(dollar){
  const result = dollar * oneDollarIs.JPY;
  return result;
};

function fromYenToPound(yen){
  const result = yen * oneYenIs.GBP;
  return result;
};

console.log("Euro to Dollar " + fromEuroToDollar(3.5));
console.log("Dollar to Yen " + fromDollarToYen(5));
console.log("Yen to Pounds " + fromYenToPound(1051));

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};
