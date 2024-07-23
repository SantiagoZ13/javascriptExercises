// Crear una funcionalidad que dado un lista de transacciones, una categoria,
// un rango de fechas, devuelva la suma de todas las transacciones de esa categoria.

// 1. Entiendan muy bien el enunciado
// 2. Planear metalmente / rayar un pseudocódigo de como lo solucionarían
// 3. Hagan funcionalidades pequeñas
// 4. Hagan pase las pruebas (unit tests / console.logs)
// 5. Refactoricen (pongan el código más lindo / legible)

const transactions = [
  {
    id: 123,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -30,
    category: "eating_out",
    time: "2018-03-12T12:34:00Z",
  },
  {
    id: 124,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-03-12T11:34:00Z",
  },
  {
    id: 127,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -100,
    category: "eating_out",
    time: "2019-03-23T11:51:00Z",
  },
  {
    id: 125,
    sourceAccount: "my_work",
    targetAccount: "my_account",
    amount: 1000,
    category: "salary",
    time: "2019-02-12T12:34:00Z",
  },
  {
    id: 126,
    sourceAccount: "my_work",
    targetAccount: "my_account",
    amount: 1100,
    category: "salary",
    time: "2019-05-12T12:34:00Z",
  },
  {
    id: 129,
    sourceAccount: "my_account",
    targetAccount: "my_work",
    amount: -100,
    category: "salary",
    time: "2019-05-12T12:35:00Z",
  },
  {
    id: 128,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -10,
    category: "groceries",
    time: "2019-01-23T12:51:00Z",
  },
];



const filterByCategory = category => transaction => transaction.category === category

const filterByDate = (fechaInicio, fechaFinal) => transaction =>{
  const fechaInicioDate = new Date(fechaInicio);
  const fechaFinalDate = new Date(fechaFinal);
  const timeStampStart = fechaInicioDate.getTime()
  const timeStampEnd = fechaFinalDate.getTime()
  const transactionDate = new Date(transaction.time)
  const transactionTimestamp = transactionDate.getTime()
  return ((transactionTimestamp >= timeStampStart) && (transactionTimestamp <= timeStampEnd)) 
};

const showJustTransactionsPrices = transaction => transaction.amount 

const resultAmount = (accu, actual) => accu + actual

const getBalanceByCategoryAndRangeDate = (
  transactions,
  category,
  fechaInicio,
  fechaFinal
) => {

  return transactions
  .filter(filterByCategory(category))
  .filter(filterByDate(fechaInicio, fechaFinal))
  .map(showJustTransactionsPrices)
  .reduce(resultAmount,0)

  /* Variables con las cuales logre el proceso para encontrar la solucion:
  const transactionsFilteredByCategory = transactions.filter(filterByCategory(category))
  const transactionsFilterByDate = transactionsFilteredByCategory.filter(filterByDate(fechaInicio, fechaFinal))
  const JustPriceTransactions = transactionsFilterByDate.map(showJustTransactionsPrices)
  const balance = JustPriceTransactions.reduce(resultAmount,0)
  */

}

console.log(getBalanceByCategoryAndRangeDate(transactions, "eating_out", "2018-01-01", "2019-12-31"))