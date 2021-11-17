var s = readline();
var n = s.length;
var diff = 0;
var i = n % 2 ? [parseInt(n / 2) - 1, parseInt(n / 2) + 1] : [n / 2 - 1, n / 2];
var j = i[1];
i = i[0];
// print(i, j);
for (; i >= 0; i--, j++) diff += s[i] === s[j] ? 0 : 1;
// print(diff);
print(diff === 1 ? "YES" : diff === 0 && n % 2 ? "YES" : "NO");

// Mr Fallah's solution
