/*
1518. Water Bottles
Easy

Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Return the maximum number of water bottles you can drink.

 

Example 1:



Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.
Example 2:



Input: numBottles = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
Number of water bottles you can drink: 15 + 3 + 1 = 19.
Example 3:

Input: numBottles = 5, numExchange = 5
Output: 6
Example 4:

Input: numBottles = 2, numExchange = 3
Output: 2
*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
{
    function numWaterBottles(numBottles, numExchange) {
        let fullBottleCount = numBottles;
        let emptyBottleCount = 0;
        let result = 0;
        
        while (fullBottleCount > 0){
            // drink water
            result += fullBottleCount;
            
            // fullBottle => emptyBottles
            emptyBottleCount = emptyBottleCount + fullBottleCount;
            
            // next 1 for numExchange
            fullBottleCount = Math.floor(emptyBottleCount/numExchange);
            
            // this remainder goes in emptyBottleCount = emptyBottleCount + fullBottleCount;
            emptyBottleCount %= numExchange; 
        }
        return result;
    };

    console.log(numWaterBottles(9, 3));
    console.log(numWaterBottles(15, 4));
    console.log(numWaterBottles(5, 5));
    console.log(numWaterBottles(2, 3));


}