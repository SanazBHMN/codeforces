var n = readline();
var problemCount = 0;

for (var i = 0; i < n; i++) {
    var input = readline().split(" ").map(Number);
    var result = findArrayItem(input, 1);
    if(result >= 2) {
        problemCount++;
    }
}
print(problemCount);

function findArrayItem(array, value) {
    var count = 0;
    for(var i = 0; i < array.length; i++)
        if(array[i] == value)
            count++;
    return count;
}