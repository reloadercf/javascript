const aprendiendoJS={
    version: {
        nueva:'ES6',
        anterior:'ES5'
    },
    frameworks:['react','vue','angular']
}
// console.log(aprendiendoJS);

// let version = aprendiendoJS.version.nueva
// let frameworks=aprendiendoJS.frameworks[1];

// console.log(frameworks);
let {nueva}=aprendiendoJS.version;
console.log(nueva);