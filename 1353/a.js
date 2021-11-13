var t = +readline();

while (t--) {
  var input = readline().split(' ').map(Number);
  var n = input[0];
  var m = input[1];
  
  print((n === 1) ? 0 : (n === 2) ? m : 2 * m);
}
