//sprear operator
//nos permite combina dos arreglos

// let lenguajes=['JavaScript','php','python'];
// let frameworks=['Angular','laravel','django'];

//unir los arreglos en uno solo de la forma anterior
// let combinacion=lenguajes.concat(frameworks);
// console.log(combinacion)


//la nueva forma con es6
// let nuevoarreglo=[...lenguajes,...frameworks];
// console.log(nuevoarreglo)

//nos volteo nuestro arreglo
// let [ultimo]=lenguajes.reverse();
// console.log(ultimo);
// console.log(lenguajes);


//con spreed
// let [ultimoSpreed]=[...lenguajes].reverse();
// console.log(ultimoSpreed);
// console.log(lenguajes);






//otra funcion del spreed

function suma(a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(...numeros);