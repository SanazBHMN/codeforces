var n = +readline();
var sum = 0;

for(var i = 0; i < n; i++){
    polyhedron = readline();
    
    if(polyhedron === 'Tetrahedron'){
        sum = sum + 4;
    } else if(polyhedron === 'Cube'){
        sum = sum + 6;
    } else if(polyhedron === 'Octahedron'){
        sum = sum + 8;
    } else if(polyhedron === 'Dodecahedron'){
        sum = sum + 12;
    } else {
        sum = sum + 20;
    }
}
print(sum);