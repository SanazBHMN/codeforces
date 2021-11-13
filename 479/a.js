var a = +readline();
var b = +readline();
var c = +readline();
var res1 = a + b + c;
var res2 = (a + b) * c;
var res3 = a + b * c;
var res4 = a * b + c;
var res5 = a * (b + c);
var res6 = a * b * c;

print(Math.max(res1, res2, res3, res4, res5, res6));
