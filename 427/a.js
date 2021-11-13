var n = +readline();
var events = readline().split(' ').map(Number);

var crimeCount = 0;
var soldierCount = 0;

for(var j = 0; j < n; j++) {
    if(events[j] > 0) {
        soldierCount+=events[j];
    } else if(soldierCount > 0) {
        soldierCount--;
    } else {
        crimeCount++;
    }
}
print(crimeCount);