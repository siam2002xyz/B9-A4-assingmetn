function calculateMoney(tiket) {
    let expense = (8 * 50) + 500;
    let sells = tiket * 120;
    let profit = sells - expense;
    let total = profit;
    if(total < 0){
        
        return" ERROR---Yor are in loss ";
    
    }
    else{
        return total;
    }
}

console.log(calculateMoney(1055));
