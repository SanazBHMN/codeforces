var input = readline();
var zeroPattern = '0000000';
var onePattern = '1111111';

print((input.includes(zeroPattern) || input.includes(onePattern)) ? 'YES' : 'NO');
