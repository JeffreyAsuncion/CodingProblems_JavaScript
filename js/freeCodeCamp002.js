/*
    FreeCodeCamp
    JavaScript Coding Challenge #2: Factorialize a Number

    if the integer is represented with the letter n,
    a factorial is the product of all positive integers less than or equal to n.
*/

{

    function factorialize(num){
        let answer = 1;
        for (let i = num; i>=1; i--){
            answer *= i;
        }
        
        return answer;
    }

    console.log(factorialize(5));

}