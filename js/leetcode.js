/*
    FreeCodeCamp
    JavaScript Coding Challenge #3: Check for Palindromes

    
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