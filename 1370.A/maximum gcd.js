var t = +readline();
 
for(var i = 0; i < t; i++) {
	var n = +readline();
	var gcd = 0;
	
	for(var j = 1; j < n; j++) {
	    for(var k = j + 1; k <= n; k++) {
	        if(k % j === 0) {
	            gcd = j;
	        }
	    }
	}
	print(gcd);
}