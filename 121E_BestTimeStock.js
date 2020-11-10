/**
 * @param {number[]} prices
 * @return {number}
 */
 
//O(n^2) T || O(1) S 
 
var maxProfit = function(prices) {
    //Naive solution
    let profit = 0;
    
    //Loop through array
    for (let i=0; i<prices.length-1; i++) {
        let buy = prices[i];
        //Make sure i is not revisited
        for (let j=i+1; j<prices.length; j++) {
            let sell = prices[j];
            let temp = sell-buy;
            //Set new profit if bigger profit found
            if (temp > profit) profit = temp;
        }
    }
    return profit;
};
