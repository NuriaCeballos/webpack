let personaje= {
    nombre:'Tony Stark',
    codeName:'Iroman',
    vivo: false,
    edad: 40,

    coords: {
        lat: 34.034,
        lng: -118.70
    },
    
    trajes:['Mark I','Mark V','Hulbuster']
}

console.log(personaje)
console.log(personaje.nombre)

console.log(personaje.trajes.length)

const entriesPares = Object.entries(personaje)

console.log(entriesPares);

const propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades);

const valores = Object.values(personaje)
console.log(valores);
