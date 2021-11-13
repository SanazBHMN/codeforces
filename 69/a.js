var n = +readline();
var sumX = 0;
var sumY = 0;
var sumZ = 0;
 
while (n--) {
    var coordinates  = readline().split(' ').map(Number);
    sumX += coordinates[0];
    sumY += coordinates[1];
    sumZ += coordinates[2];
}
 
print((sumX === 0 && sumY === 0 && sumZ === 0) ? 'YES' : 'NO');