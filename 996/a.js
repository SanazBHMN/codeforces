var n = +readline();

var c = parseInt(n / 100);
var r = n % 100;
//print(c, r);

c += parseInt(r / 20);
r = r % 20;
//print(c, r);

c += parseInt(r / 10);
r = r % 10;
//print(c, r);

c += parseInt(r / 5);
r = r % 5;
//print(c, r);

c += parseInt(r / 1);
r = r % 1;
//print(c, r);

print(c);