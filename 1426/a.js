var t = +readline();

for(var i = 0; i < t; i++) {
    var input = readline().split(' ').map(Number);
    
    print(input[0] == 1 || input[0] == 2 ? 1 : Math.ceil((input[0] - 2) / input[1]) + 1);
}