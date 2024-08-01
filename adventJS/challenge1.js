const giftIds = [2, 1, 3, 4]


function findFirstRepeated(gifts) {
    const repeatedNumbers = gifts.filter((gift, position, gifts) => (!(position === gifts.indexOf(gift))) )
    if(repeatedNumbers.length > 1){
        return repeatedNumbers[0]
    }else{
        return -1
    }
}

const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)