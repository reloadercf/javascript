
//herencia
export default class Tarea{
    constructor(nombre,prioridad){
        this.nombre=nombre;
        this.prioridad=prioridad
    }
    mostrar(){
       console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}



let tarea1  =   new Tarea('usar javascript','alta');
let tarea2  =   new Tarea('comer','baja');

// console.log(tarea1.mostrar());
//console.log(tarea2.mostrar());

//Compras 


// compra1.mostrar();

// console.log(compra1.hola());