var s = readline();
var n = s.length;
var firstHalf =
  n % 2 === 0 ? s.substring(0, s.length / 2) : s.substring(0, s.length / 2 + 1);
var secondHalf = s.substring(s.length / 2);
var diff = getDifference(firstHalf, reverseString(secondHalf));

print(diff === 1 ? "YES" : diff === 0 && n % 2 ? "YES" : "NO");

function reverseString(str) {
  var stack = [];

  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  var reversedString = "";
  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

function getDifference(str1, str2) {
  var count = 0;

  for (var i = 0, j = 0; i < str1.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      count++;
    } else continue;
  }
  return count;
}
