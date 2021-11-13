var guestName = readline();
var hostName = readline();
var pile = readline().split('').sort().join('');
var concat = guestName.concat(hostName).split('').sort().join('');

if(concat === pile){
    print('YES');
} else {
    print('NO');
}