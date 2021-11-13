var k = +readline();
var l = +readline();
var m = +readline();
var n = +readline();
var d = +readline();
var sum = 0;

for (var i = 0; i < d; i++) {
  if (i % k === 0 || i % l === 0 || i % m === 0 || i % n === 0) {
    sum++;
  }
}

print(sum);
