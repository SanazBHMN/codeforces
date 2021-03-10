for(var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        var input = readline().split('').map(Number);
        if(input[i][j] === 1) {
            print(abs(i - 3) + abs(j - 3));
            
        }
    }
}