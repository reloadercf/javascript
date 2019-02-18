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

// console.log(tarea1.mostrar());

//Compras 

let compra1 =   new ComprasPendientes('Jabon','urgente',3);
compra1.mostrar();

console.log(compra1.hola());