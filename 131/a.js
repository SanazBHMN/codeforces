var s = readline();
var firstChar = s[0];
var restChar = s.slice(1);

if (
  firstChar === firstChar.toLowerCase() &&
  restChar === restChar.toUpperCase()
) {
  print(firstChar.toUpperCase() + restChar.toLowerCase());
} else if (s === s.toUpperCase()) {
  print(s.toLowerCase());
} else {
  print(s);
}
