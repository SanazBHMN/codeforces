for(var i = 1; i <= 5; i++) {
    var input = readline().split(' ').map(Number);
    for (var j = 1; j <= 5; j++) {
        if(input[j - 1] === 1) {
            print(Math.abs(i - 3) + Math.abs(j - 3));
            
        }
    }
}