
test("One euro should be 1.206 dollars", function(){
  const { fromEuroToDollar } = require('./app.js')
  const dollars = fromEuroToDollar(3.5)
  const expected = 3.5 * 1.2;
   expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One Dollar should be 110 Yen", function(){
  const { fromDollarToYen } = require('./app.js')
  const yen = fromDollarToYen(5)
  const expected = 5 * 127.9;
  expect(fromDollarToYen(5)).toBe(550);
})

test("One Yen should be 0.007 Pounds", function(){
  const { fromYenToPound } = require('./app.js')
  const yen = fromYenToPound(1051)
  const expected = 1051 * 0.007;
   expect(fromYenToPound(1051)).toBe(7.357);
})