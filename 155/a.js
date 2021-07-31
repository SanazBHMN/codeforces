var n = +readline(); //num of contests
var point = readline().split(' ').map(Number);

var count = 0;
var max = point[0];
var min = point[0];

for(var j = 0; j < n; j++) {
	if(point[j] > max) {
		max = point[j];
		count++;
		}
	if(point[j] < min) {
		min = point[j];
		count++;
	}
}

print(count);