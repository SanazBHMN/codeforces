var n = +readline();
var c = 0;
var h = [];
var a = [];

for(var i = 0; i < n; i++){
    var input = readline().split(' ').map(Number);
    h[i] = input[0];
    a[i] = input[1];
}
// print(h);
// print(a);

for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
        if(h[i] === a[j]){
            c++;
        }
    }
}
print(c);