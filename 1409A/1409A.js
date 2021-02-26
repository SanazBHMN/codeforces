var testCase = +readline();

function obtainBFromA(a, b) {
  var min = 0;

  var absoluteDifference = Math.abs(a - b);
  for (var i = 10; i > 0; i--) {
    min += absoluteDifference / i;
    absoluteDifference = absoluteDifference % i;
  }
  console.log(Math.floor(min));
}