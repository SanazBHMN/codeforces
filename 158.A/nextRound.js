// var n = 8;
// var k = 5;
// var a = [10, 9, 8, 7, 7, 7, 5, 5];
// var count = 0;

// for (var i = 0; i < a.length; i++) {
//   if (a[i] > k && a[i] > 0) {
//     count++;
//   }
// }
// console.log(count);

var input = readline().split(' ').map(Number);
var n = input[0];
var k = input[1];
var count = 0;

for(var i = 0; i < n; i++){
    var scores = readline().split(' ').map(Number);
    if(scores[i] > k && scores[i] > 0){
        count++;
    }
}
print(count);
