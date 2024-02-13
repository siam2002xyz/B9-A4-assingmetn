function monthlySavings(arr, livingCost) {
   
    let totalEarn = 0;

    let tex =0;
   for(let item of arr){
        totalEarn += item;
        if(item>=3000){
            tex = tex + (item * (20/100))
        }

    }

    let income = totalEarn - tex;
    const savings= income- livingCost;

    if (savings <= 0) {
        return "earn more";
        
    } 
    else {
        return savings;
    }
}

console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));

