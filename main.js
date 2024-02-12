
// let almuerzo = ["eroski", "barfox", "camilo", "empanadas"]

// for(let i=0; i< almuerzo.length; i++){
//     if(almuerzo[i] === "barfox"){
//         console.log("existe")
//     }
// }

// for(let i in almuerzo){
//     if(almuerzo[i] === "barfox"){
//         console.log("existe")
//     }

// }

// for(let sitio of almuerzo){
//     if(sitio === "barfox"){
//         console.log("existe")
//     }
// }

// LA ALTERNATIVA MÁS PRO SERÍA EL INCLUDE...

// console.log(almuerzo.includes("barfox"))


//POTENCIA

// console.log(3 ** 5)


//RAMIRO SE TRANSFORMA EN UN ARRAY

// let ramiro = {
//     edad: 42,
//     nombre: "Ramiro",
//     ciudad: "Burjassot",
//     hobbies : {
//         hobbie1 : "Correr",
//         hobbie2 : "Conducir"
//     }
// }

// console.log(Object.entries(ramiro))
// console.log(Object.entries(ramiro.hobbies))

// let carlos = {
//     edad: 23,
//     nombre: "Carlos",
//     ciudad: "Valencia",
//     hobbies : {
//         hobbie1: "Videojuegos"
//     }
// }

// for (let property in carlos) {
//     console.log([property , carlos[property]]);
// }

// let telefonos = ["666555444", "654776543", "675998096"]

// for(let i = 0; i < telefonos.length; i++){
//     telefonos[i] = telefonos[i].padStart(12, "+34")
// }

// console.log(telefonos)


// const Pol = {
//     edad: 19,
//     ciudad: "Bunyola",
//     nombre: "Pol",
//     hobbies : [
//         "programar",
//         "conducir",
//         "beber"
//     ]
// }

// console.log(Object.getOwnPropertyDescriptor(Pol, "nombre"))



// const videojuegos = {
//     first: "Quake",
//     second: "Alien vs Predator",
//     third: "Blade edge of darkness",
//     fourth: "Half - Life",
//     fifth: "Age of empires"
// }

// let {first, second, ...demas } = videojuegos

// console.log(second)

// second = "Max Payne"

// console.log(demas.fourth)

// let Fran = ["patata","albondiga","alcachofa", ["pescado", "carne"]]

// console.log(Fran.flat())


// let productos = [
//     {nombre : "tomate", precio: 2, cantidad: 3},
//     {nombre : "coche", precio: 10000, cantidad: 1},
//     {nombre : "play", precio: 500, cantidad: 1}
// ]

// let nuevoProductos = productos.flatMap(
//     producto => [producto.nombre, producto.precio, producto.cantidad]
// )

// console.log(nuevoProductos)

// let arrayPedro = [
//     ['nombre', 'Pedro'],
//     ['ciudad', 'Valencia'],
//     ['telefono', 111555999]
// ]

// console.log(Object.fromEntries(arrayPedro))

// let FernandoConfundido = {
//     edad: false,
//     ciudad: "Madrid"
// }

// let cadena = JSON.stringify(FernandoConfundido)
// cadena = JSON.parse(cadena)

// console.log(cadena)

//NULLISH COALESCING ??

// console.log(undefined ?? "CAMPEON")
// console.log('' ?? "CAMPEONNNNNNNN")
// console.log(0 ?? "yeeasdfasdf")

// let password = undefined

// console.log(password ?? "Por favor introduce un password correcto")


// Arreglo de números
// const numeros = [1, 2, 3, 4, 5, 6];

// const numerosPares = numeros.filter(
//     numero => (numero % 2 === 0)
// )

// console.log(numerosPares); // [2, 4, 6]

// const changeScreen = (target) => {

//     let screens = ["pantalla1", "pantalla2", "pantalla3", "pantalla4"]

//     screens = screens.filter(
//         pantalla => pantalla !== target
//     )

    
// }

// changeScreen("pantalla1")



// let carlos = {
//     libro : "El codigo davinci",
//     deporte : "Baloncesto",
//     coche : "Ojalá"
// }

// if(carlos.libro?.libro2 === "aprende a programar en c++"){
//     console.log("df")
// }

// let frase = "Estamos haciendo un replaceAll a ver que pasa"

// let senyorito = frase.replaceAll(" ", "@")
// console.log(senyorito)



// class Persona {
//     constructor(nombre, edad) {
//       this._nombre = nombre;
//       this._edad = edad;
//     }
  
//     // Getter para 'nombre'
//     get nombre() {
//       return this._nombre;
//     }
  
//     // Setter para 'nombre'
//     set nombre(nuevoNombre) {
//       this._nombre = nuevoNombre;
//     }
  
//     // Getter para 'edad'
//     get edad() {
//       return this._edad;
//     }
  
//     // Setter para 'edad'
//     set edad(nuevaEdad) {
//       if (nuevaEdad < 0) {
//         console.log('La edad no puede ser negativa.');
//       } else {
//         this._edad = nuevaEdad;
//       }
//     }
//   }
  
//   // Creando una instancia de Persona
//   const persona = new Persona('Juan', 30);
  
//   // Accediendo a las propiedades mediante getters
//   console.log(persona.nombre); // Muestra: Juan
//   console.log(persona.edad); // Muestra: 30
  
//   // Modificando las propiedades mediante setters
//   persona.nombre = 'Ana';
//   persona.edad = 28;
  
//   // Verificando los cambios
//   console.log(persona.nombre); // Muestra: Ana
//   console.log(persona.edad); // Muestra: 28
  
//   // Intentando asignar una edad negativa
//   persona.edad = -5; // Muestra: La edad no puede ser negativa.
  


// let sergio = {
//     hobbie1: "saltar en paracaidas",
//     hobbie2: "montar a caballo",
//     hobbie3: "comer",
//     hobbie4: "beber ALCOHOL"
// }

// with(sergio){

//     hobbie3 = "cocinar"
// }


// console.log(sergio)


// let arrayLength
// while (!parseInt(arrayLength)){
//     arrayLength = parseInt(prompt("Introduce el tamaño del array"))
// }

// let marker
// while (!parseInt(marker)){
//     marker = parseInt(prompt("Introduce el número que quieres que acaben los números del array"))
// }

// let newArray = []

// for (let i = 0; i<arrayLength; i++){
//     let random = Math.floor(Math.random() * 300)
//     if (random.toString().endsWith(marker)){
//         newArray.push(random)
//     }
// }
// console.log(newArray)


let mainArray = []
let finalArray = []
let limSup = 300
let limInf = 1
let finalDigit = ""

const quantity = parseInt(prompt("¿De cuántos números quieres que sea el array aleatorio?"))

const finalDigitInput = () => {
    do {
        finalDigit = parseInt(prompt("¿En qué digito quieres que acaben los números a mostrar?"))
    } while (isNaN(finalDigit))
}

const fillArray = (quantity) => {
    for(let i = 0; i < quantity; i++) {
        mainArray.push(Math.floor(Math.random()*(limSup-limInf)+limInf))
    }
}

const searchArray = (finalDigit, array) => {
    for(let i = 0; i < quantity; i++) {
        if(array[i] % 10 === finalDigit){
            finalArray.push(array[i])
        }
    }
}

finalDigitInput()
fillArray(quantity)
searchArray(finalDigit, mainArray)

console.log(mainArray)
console.log(finalArray)