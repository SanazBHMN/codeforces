var t = +readline();
 
for(var i = 0; i < t; i++){
    var str = readline().split(''); // array of chars
    // print(str[i]);
    // print(strSlice);
    
    for(var j = 3; j < str.length; j++){
        if(j % 2 !== 0) {
            strSlice.push(str[j]);
        }
    }
    print(strSlice.join(''));
}