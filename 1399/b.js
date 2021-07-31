var t = +readline();
 
for(var i = 0; i < t; i++) {
    var n = +readline();
    var a = readline().split(' ').map(Number); //candies
    var b = readline().split(' ').map(Number); //oranges
   
    var min_a = Math.min(...a);
    var min_b = Math.min(...b);
    var min_moves = 0;
    
    for(var j = 0; j < n; j++) {
        min_moves += Math.max((a[j] - min_a), (b[j] - min_b));
    }
    
    print(min_moves);
}