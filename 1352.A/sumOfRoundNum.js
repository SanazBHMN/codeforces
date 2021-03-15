var t = +readline();

for(var i = 0; i < t; i++){
    var n = readline().split('');
    var k = 0;
    for(var j = 0; j < n.length; j++){
        if(n[j] !== '0'){
            k++;
        }
    }
    print(k);
    for(var k = 0; k < n.length; k++){
        if(n[k] !== '0'){
            print(n[k] + '0'.repeat(n.length - k - 1));
        }
    }
}