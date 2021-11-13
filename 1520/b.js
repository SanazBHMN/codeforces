var t = +readline();

while (t--) {
  var n = +readline();
  var d = Math.floor(Math.log10(n)) + 1;
  var o = (d - 1) * 9; // ordinary numbers with less number of digits than n
  var firstOrdinary = (Math.pow(10, d) - 1) / 9;

  // for(var i = 1; i < 10; i++) {
  //       if(n < firstOrdinary * i) {
  //           break;
  //       }
  //       o++;
  //   }
  for (var i = 1; i < 10 && n >= firstOrdinary * i; i++, o++);
  print(o);
}
