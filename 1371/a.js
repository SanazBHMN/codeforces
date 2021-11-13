var t = +readline();

while(t--) {
    var n = +readline();
    
    if(n % 2 !== 0) {
        print(Math.ceil(n / 2));
    } else {
        print(n / 2);
    }   
}