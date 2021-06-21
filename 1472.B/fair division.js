var t = +readline();

for(var i = 0; i < t; i++) {
    var n = +readline();
    var weights = readline().split(' ').map(Number);
    var qnt_1 = 0;
    var qnt_2 = 0;
    
    for(var j = 0; j < n; j++) {
        if(weights[j] === 1) {
            qnt_1++;
        } else {
            qnt_2++;
        }
    }
    
    if(qnt_2 !== 0) {
        if(qnt_1 % 2 === 0 && qnt_1 > 0) {
            print('YES');
        } else {
            print('NO');
        }
    } else {
        if(qnt_1 % 2 === 0) {
            print('YES');
        } else {
            print('NO');
        }
    }
    
}