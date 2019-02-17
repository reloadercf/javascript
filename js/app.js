//object literal
const persona={
    nombre:'carlos',
    profesion:'Programador',
    edad:'50'
}
// console.log(persona);

//object constructor
function Tarea(nombre,urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}
//crear una nueva tarea
//las ventajas de el object constructor es que te permite crear multiples objetos
const tarea1= new Tarea('usar javascript', 'urgente');
const tarea2= new Tarea('tomar cafe', 'mediano');
const tarea3= new Tarea('pasear al perro', 'baja');
console.log(tarea1);
console.log(tarea1.nombre);


console.log(tarea2);
console.log(tarea3);