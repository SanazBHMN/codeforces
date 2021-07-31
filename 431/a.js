var calories = readline().split(' ').map(Number);
var gameProcess = readline().split('').map(Number);
var totalCalories = 0;

function getOccurrence(arr, elem) {
	var result = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === elem) {
			result++;
		}
	}
	return result;
}

*********************************

var calories = readline().split(' ').map(Number);
var gameProcess = readline().split('').map(Number);
var totalCalories = 0;

// for(var i = 0; i < gameProcess.length; i++) {
//     // totalCalories += calories[+gameProcess[i] - 1]
//     if(gameProcess[i] === '1') {
//         totalCalories += calories[0];
//     } else if(gameProcess[i] === '2') {
//         totalCalories += calories[1];
//     } else if(gameProcess[i] === '3') {
//         totalCalories += calories[2];
//     } else {
//         totalCalories += calories[3];
//     }
// }

// print(totalCalories);

for (var i = 1; i <= 4; i++) {
    totalCalories += getOccurrence(gameProcess, i) * calories[i - 1];
}

print(totalCalories);

function getOccurrence(arr, elem) {
	var result = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === elem) {
			result++;
		}
	}
	return result;
}