var t = +readline();

for(var i = 0; i < t; i++) {
    var x = readline().split('').map(Number);
    var dCount = 0;
    var sum = sumOfDigitsFrom1ToN(x.length);
    
    for(var j = 1; j < x[0]; j++) {
        dCount += 10;
    }
    
    print(sum + dCount); //total digits
}

function sumOfDigitsFrom1ToN(n) {
    return (n * (n + 1)) / 2;
}