var t = +readline();
 
for(var j = 0; j < t; j++){
    var n = +readline();
    var a = readline().split(' ').map(Number);
    var even = 0;
    var odd = 0;
    
    for(var i = 0; i < n; i++){
        if((i % 2 === 0) && (a[i] % 2 !== 0)){
        odd++;
        }
        if((i % 2 !== 0) && (a[i] % 2 === 0)){
            even++;
        }
    }
    print((even === odd)? (even): -1);
    
}