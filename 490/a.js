var n = +readline();
var t = readline().split(' ').map(Number);
var t_1 = 0;
var t_2 = 0;
var t_3 = 0;
var index1 = [];
var index2 = [];
var index3 = [];
var w = 0;

for(var i = 0; i < n; i++) {
    if(t[i] === 1){
        index1.push(i+1);
        t_1++;
    }else if(t[i] === 2){
        index2.push(i+1);
        t_2++;
    }else {
        index3.push(i+1);
        t_3++;
    }
}

if(t_1 !== 0 && t_2 !== 0 && t_3 !== 0){
    w = Math.min(t_1, t_2, t_3);
    print(w);
	for(var j = 0; j < w; j++) {
	print(index1[j], index2[j], index3[j]);
}
}else{
    print(0);
}