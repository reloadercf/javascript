//los arreglos llevan corrchetes
const personas=[
    {nombre:'carlos', edad:27, aprendiendo:'javascript'},
    {nombre:'luis', edad:28, aprendiendo:'java'},
    {nombre:'fernando', edad:30, aprendiendo:'python'},
    {nombre:'enrrique', edad:23, aprendiendo:'angular'},
    {nombre:'el chavo', edad:20, aprendiendo:'php'},
]
console.log(personas);

//mayores a 28
const mayores=personas.filter(persona=>{
    return persona.edad>28;
})
// console.log(mayores);

//que aprende fernando y su edad

const fernando=personas.find(persona=>{
    return persona.nombre==='fernando';
});
// console.log(`Fernando esta aprendiendo ${fernando.aprendiendo}`);

//reduce nos hace la sumatoria
let total = personas.reduce((edadTotal,persona)=>{
    return edadTotal+persona.edad;
},0);

//suma las edades
console.log(total);


//cuenta los registros
console.log(personas.length);
