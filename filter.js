// Ejemplo de filtrar productos baratos
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'mouse', price: 20},
    {id: 3, name: 'keyboard', price: 50}
]

const isCheap = product => product.price < 30
const isExpensive = product => !isCheap(product)
const cheapProducts = products.filter(isCheap)
const expensiveProducts = products.filter(isExpensive)

console.log(cheapProducts)
console.log(expensiveProducts)

//Devolver solo los numeros sin que se repitan

const numbers = [1,3,5,2,4,3,4,6]

const noRepitsNumbers = numbers.filter((number, position, numbers) =>{
    return position === numbers.indexOf(number);
})
const noRepitsNumbersEnhanced = numbers.filter((number, position, numbers) => position === numbers.indexOf(number))

console.log(noRepitsNumbers)
console.log(noRepitsNumbersEnhanced)