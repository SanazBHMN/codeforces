var tableCard = readline().split('');
var handCards = readline()

if(handCards.includes(tableCard[0]) || handCards.includes(tableCard[1])) {
    print('YES');
} else {
    print('NO');
}