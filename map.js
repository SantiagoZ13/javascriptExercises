
// crear array con el doble de cada numero del array original
const numbers = [3, 5, 20, 90]
const doubles = numbers.map(function(number){
    return number * 2;    
})
const doublesEnhanced = numbers.map(number => number * 2)

//console.log(numbers)
//console.log(doubles)
//console.log(doublesEnhanced)


// Sacar el descuento de cada producto que cueste más de 30 dolares
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'mouse', price: 20},
    {id: 3, name: 'keyboard', price: 50}
]

const productsWithDescount = products.map(function(product){
    if(product.price < 30){
        return product
    }
    return {
        ...product,
        price: product.price * 0.9
    }
})

const productsWithDescountEnhanced = products.map(product => {
    if(product.price < 30) return product
    return {
        ...product,
        price: product.price * 0.9
    }
})

//console.log(products)
//console.log(productsWithDescount)
//console.log(productsWithDescountEnhanced)


//Extrae el id de los objetos y ponlos en un array
const productsIds = products.map(function(product){
    return product.id
})
const productsIdsEnhanced = products.map(({ id }) => id)

console.log(productsIds)
console.log(productsIdsEnhanced)