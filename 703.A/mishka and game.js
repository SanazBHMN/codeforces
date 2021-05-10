var n = +readline(); // #rounds
var mishkaVictory = 0;
var chrisVictory = 0;

for(var i = 0; i < n; i++){
    var input = readline().split(' ').map(Number);
    var m = input[0]; //Mishka
    var c = input[1]; //Chris
    
    if(m > c){
        mishkaVictory++;
    } else if(c > m){
        chrisVictory++;
    }
}

if(mishkaVictory > chrisVictory){
    print('Mishka');
} else if (chrisVictory > mishkaVictory){
    print('Chris');
}else {
    print('Friendship is magic!^^');
}