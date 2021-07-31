var n = +readline();
var sum = 0;

for(var i = 0; i < n; i++){
    polyhedron = readline();
    
    switch(polyhedron){
        case "Tetrahedron":
            sum = sum + 4;
            break;
        case "Cube":
            sum = sum + 6;
            break;    
        case "Octahedron":
            sum = sum + 8;
            break;
        case "Dodecahedron":
            sum = sum + 12;
            break;
        case "Icosahedron":
            sum = sum + 20;
            break;
    }
}
print(sum);