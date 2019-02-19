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

let compra1 =   new ComprasPendientes('Jabon','urgente',3);