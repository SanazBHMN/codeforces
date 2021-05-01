var t = +readline();

for(var i = 0; i < t; i++) {
    var n = +readline();
    var a = readline().split(' ').map(Number); //candies
    var b = readline().split(' ').map(Number); //oranges
   
    var min_a = Math.min(...a);
    var min_b = Math.min(...b);
    var min_moves = 0;
    
    for(var i = 0; i < n; i++) {
        min_moves += Math.max((a[i] - min_a), (b[i] - min_b));
    }
    
    print(min_moves);
}