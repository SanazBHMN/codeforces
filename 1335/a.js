var t = +readline();
var a, b;

for(var i = 0; i < t; i++){
    var candy = +readline();
	var c = 0;
    for(var j = 1; j < candy; j++){
        a = candy - j;
        b = j;
        if(a > b){
            c++;
        } else {
            break;
        }
    }
print(c);
}