const nombreTarea = 'pasear al perro';
// export default nombreTarea;

const tarea='tarea'
export default {
    nombre: nombreTarea,
    tarea:  tarea
}

//herencia
class Tarea{
    constructor(nombre,prioridad){
        this.nombre=nombre;
        this.prioridad=prioridad
    }
    mostrar(){
       console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad=cantidad
    }
    mostrar(){
        super.mostrar();
        console.log(` la cantidad de ${this.cantidad}`);
    }
    hola(){
        return 'hola';
    }
}


let tarea1  =   new Tarea('usar javascript','alta');
let tarea2  =   new Tarea('comer','baja');

// console.log(tarea1.mostrar());
//console.log(tarea2.mostrar());

//Compras 

let compra1 =   new ComprasPendientes('Jabon','urgente',3);
// compra1.mostrar();

// console.log(compra1.hola());