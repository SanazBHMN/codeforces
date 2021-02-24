var year = +readline();

function checkDistinct(year) {
	var yearArray = year.toString().split("").map(Number);
	var yearSet = new Set(yearArray);

   if(yearSet.size == yearArray.length) {
     return year;
   } else {
     return undefined;
   }
 }

 for (var i = year + 1; i <= 10000; i++) {
   if (checkDistinct(i) == i) {
     print(i);
     break;
   }
 }