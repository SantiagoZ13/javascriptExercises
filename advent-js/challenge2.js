const gifts = ['tren', 'oso', 'pelota']
const materiales = 'tronesa'

const manufacture = (giftsList, materiales) =>{
    const materialesSplit = materiales.split("")
    return filteredGifts = giftsList.filter((gift)=>{
        let actuallySplitGift = gift.split("")
        let isTrue = []
        for(let x = 0; x < actuallySplitGift.length; x++){
            
            for(let y = 0; y < materialesSplit.length; y++){
                if(actuallySplitGift[x] === materialesSplit[y]){
                    isTrue.push(true)
                    break
                }
            }
        }
        if(isTrue.length === actuallySplitGift.length){
            return gift
        }
    })
}

console.log(manufacture(gifts, materiales))