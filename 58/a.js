var s = readline();
var word = 'hello';
var hIndex = s.indexOf('h');
// var hIndex = s.lastIndexOf(word[0]);
var count = 1;

for(var i = hIndex; i < s.length; i++) {
	for(var j = 0; j < word.length; j++) {
		if(s.includes(word[j + 1]){
			count++;
			i = s.indexOf(word[j + 1]);
		}
	}
}

print((count === 5)? 'YES': 'NO');