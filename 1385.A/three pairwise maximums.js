var t = +readline();
 
for(var i = 0; i < t; i++) {
    var n = +readline(); // length
    var arr = [];
    for(var j = n; j >= 1; j--) {
        arr.push(j);
    }
    if(n % 2 !== 0) {
        arr[parseInt(n / 2)] = 1;
        arr[arr.length -1] = parseInt(n / 2) + 1;
    }
    print(arr.join(' '));
}