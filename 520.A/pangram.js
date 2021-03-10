var n = +readline();
var word = readline().toLowerCase();
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

for(var i = 0; i < alphabet.length; i++){
    if(word.indexOf(alphabet[i] === -1)){
        print('NO');
    } else {
        print('YES');
    }
}