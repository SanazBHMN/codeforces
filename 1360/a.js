var t = +readline();

for(var i = 0; i < t; i++) {
    var sideLength = readline().split(' ').map(Number);
    var a = sideLength[0];
    var b = sideLength[1];
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    
    if(max > (2 * min)) {
        print(Math.pow(max, 2));
    } else {
        print(Math.pow((2 * min), 2));
    }
}