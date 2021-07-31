var n = +readline();
var m = +readline();

for(var i = 0; i < n; i++){
    for(var j = 0; j < m; j++){
        if(i <= j && i % 2 === 0){
            print('#');
        } else {
            print('.');
        }
    }
}