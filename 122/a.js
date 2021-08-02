var n = +readline();
var luckyNumbers = [4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777];
var flag = false;

for(var i = 0; i < luckyNumbers.length; i++) {
    if(n === luckyNumbers[i] || n % luckyNumbers[i] === 0) {
        flag = true;
        break;
    }
}

print(flag ? 'YES' : 'NO');