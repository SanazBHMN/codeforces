var t = +readline();

while (t--) {
    var n = +readline(); // number of days
    var tasks = readline();
    var taskSet = new Set();
    var answer = "NO";
    
    for(var i = 0; i < n; i++) {
        while (i + 1 < n && tasks[i + 1] == tasks[i]) {
            i++;
        }
        if(!taskSet.has(tasks[i])) {
            taskSet.add(tasks[i]);   
        } else {
            answer = "YES";
            break;
        }
    }
    // print(Array.from(taskSet));
    print(answer);
}