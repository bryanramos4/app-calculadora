//Sentencia if..else

var nombre = 'Bryan';
var esSoltero = true;

if (esSoltero == true){
    console.log(nombre + ' es soltero ');
} else {
    console.log(nombre + ' es casado ');
}


var nombre = 'Bryan';
var esSoltero = false;

if (esSoltero == true){
    console.log(nombre + ' es soltero ');
} else {
    console.log(nombre + ' es casado ');
}

//Sentencia if.anidadas

var nombre = 'Bryan'
var edad = 63;

// edad < 12 es un niño
// edad > 11, es < 18, es un adolescente.
// edad > 17, es < 60, es un adulto.
// edad > 60 es un anciano. 

if (edad < 12){
    console.log(nombre + ' es un niño ');
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente ')
} else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto ')
} else {
    console.log(nombre + ' es un anciano ')
}

//Sentencia switch

var mes = 3;

switch(mes){
    case 1:
        console.log('Enero');
        break;
    
    case 2:
        console.log('Febrero');
            break;
            
    case 3:
        console.log('Marzo');
        break;
        
    case 4:
        console.log('Abril');
        break;
        
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes no encontrado');            
}

//Sentencia For

for(var i=5; i <=25; i+=5){
    console.log(i);
}

//Sentencia While, do while

var i = 10;
while(i >= 1){
    console.log(i);
    i--;
}
console.log(i);ç

//

var i = 11;
do{
    console.log(i);
    i++;
}while(i<=10);
console.log(i);
