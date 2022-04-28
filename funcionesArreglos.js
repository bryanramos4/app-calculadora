//
function mensaje(){
  return 'mensaje como devolución'
}

var msj = mensaje();
console.log(msj);

//

function sumar(a, b, c){
    return a + b + c;
}

var result = sumar(4, 5, 10);
console.log(result)

//

function sumar(a, b, c=3){
    return a + b + c;
}

var result = sumar(4, 5, 10);
var result1 = sumar(5, 7);
console.log(result)
console.log(result1)

//Funciones recursivas

var factorial = function(n){
    if((n==0) || (n==1))
      return 1;
    else
      return(n * factorial(n-1));  
}

console.log(factorial(4));

//Arrays

var nombres = ['Bryan', 'Alejo', 'Julian', 'Karen'];
var vegetales = new Array('tomate', 'lechuga', 'zanahoria');

console.log(nombres[3])
console.log(vegetales[2])

nombres[0] = 'Jose';
vegetales[2] = 'brocoli'

console.log(nombres[0])
console.log(vegetales[2])

//

console.log(nombres.length);
for(var i =0; i <= nombres.length - 1; i++){
    console.log(nombres[i]);
}

vegetales.forEach(function(elemento, indice){
    console.log(elemento, indice);
})

//

console.log(nombres);
nombres.push('Joaquin');
console.log(nombres);
nombres.unshift('Adrian')
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf('Alejo');
console.log(pos);

nombres.splice(1, 1);
console.log(nombres);

