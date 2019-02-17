// metodos o funcuones en un objeto
// const persona={
//     nombre:'Carlos',
//     trabajo:'desarrollador web',
//     edad:'300',
//     musicaRock:true,
//     mostrarInformacion:function(){
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }

//nueva forma
const persona={
    nombre:'Carlos',
    trabajo:'desarrollador web',
    edad:'300',
    musicaRock:true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}
persona.mostrarInformacion()