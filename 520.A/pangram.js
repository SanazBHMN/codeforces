var n = +readline();
var s = readline().toLowerCase();
var sSet = new Set(s);
 
print((sSet.size === 26)? 'YES':'NO');