//Uso de variables
var nombre = 'Bryan';
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

var edad = 'cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
  
puestoDeTrabajo = null
console.log(puestoDeTrabajo);

var = hola;

//Operadores matemáticos

var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 28;
edadMaria = 35;
yearActual = 2022;

diferenciaEdad = edadMaria - edadAna;
sumaEdades = edadAna + edadMaria;
yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nacio Ana ' + yearAna);
console.log('Año en que nacio Maria ' + yearMaria);


//Operadores Lógicos, unarios y de asignación

//Lógicos
var edadAna, edadMaria, diferenciaEdad;

edadAna = 36;
edadMaria = 29;
yearActual = 2022;

var mayorAna = edadAna > edadMaria;
console.log(mayorAna);

//Unarios, ++incremento, --decremento
edadAna++;
console.log(edadAna);

//Asignación, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c = a % 5; //residuo de una división
console.log(c);

a += b;
console.log(a);


