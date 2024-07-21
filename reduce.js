const numbers = [10, 12, 25, 99, 30]

// Ejemplo de sumar numeros de un array con for
let forTotal = 0;
for(let number of numbers){
	forTotal += number;
}


// Ahora con reduce
const doubles = numbers.reduce(function(acumulador, number){
return acumulador + number
}, 0)
//console.log(doubles)


// Mejorada
const acumular = (acumulador, number) => acumulador + number
const total = numbers.reduce(acumular, 0)
//console.log(total)


//Dado un array devuelve los dobles en otro array pero usando reduce
const array = [71, 41, 19, 88, 3, 65]
const funcionDobles = (acumulador, number) => [...acumulador, number * 2]
const doublesInArrayWithReduce = array.reduce(funcionDobles, [])

console.log(doublesInArrayWithReduce)
