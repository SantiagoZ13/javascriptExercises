// FIND
// Ejemplo de encuentra el elemento que tenga un valor de 20 dolares
const products = [
    {id: 1, nombre: "Boligrafo", precio: 2},
    {id: 2, nombre: "Cuaderno", precio: 9},
    {id: 3, nombre: "Maleta", precio: 20},
    ] 
    
const maleta = products.find(function(product){
    return product.precio === 20
})
    
const bag = products.find((product) => product.precio === 20)

//SOME
// Verifica si existe algun elemento que cueste 2 dolares
const twoDollars = products.some((product) => product.precio === 2) // True
// Verifica si existe algun elemento que cueste 30 dolares
const tirtyDollars = products.some((product) => product.precio === 30) // False

//INCLUDE with some
// Verifica si existe algun elemento que cueste tenga la e en el nombre
const hasE = products.some((product) => product.nombre.includes('e')) // True

//EVERY with include
// Verifica que todos los elementos del array tenga la e en el nombre
const AllHaveE = products.every((product) => product.nombre.includes('e')) // False