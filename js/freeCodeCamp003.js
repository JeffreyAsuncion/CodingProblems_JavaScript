/*
    FreeCodeCamp
    JavaScript Coding Challenge #3: Check for Palindromes

    
*/

{

    function palindromes(str){
        return str === str.split("").reverse().join("");
    }

    console.log(palindromes("hello"));
    console.log(palindromes("racecar"));
    console.log(palindromes("eye"));
}