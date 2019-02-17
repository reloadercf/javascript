//prototypes
// function mostrarInformacionTarea(tarea,prioridad){
//     return `La tarea ${tarea} tiene una prioridad de ${prioridad}`
// }

//object literal
const persona={
    nombre:'carlos',
    profesion:'Programador',
    edad:'50'
}
// console.log(persona);
//lo siguiente es un error para utilizar la funcion mostrarInformacionTarea para un cliente
//para evitar que alguien use el codigo y lo modifique a su conveniencia se usan los prototypes
// const mostrarCliente=mostrarInformacionTarea(persona.nombre, persona.profesion)
// console.log(mostrarCliente);

//object constructor
function Tarea(nombre,urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}
//agregar un prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}

//crear una nueva tarea
//las ventajas de el object constructor es que te permite crear multiples objetos
// const tarea1= new Tarea('usar javascript', 'urgente');
// console.log(tarea1);


//object constructor ligado a un prototype
const tarea1= new Tarea('usar javascript', 'urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

const tarea2= new Tarea('pasear al perro', 'baja');
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());