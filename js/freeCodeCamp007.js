/*
    FreeCodeCamp
    JavaScript Coding Challenge #7: Confirm Ending

    Check if string `str` ends with the given target string `target`

    This challenge can be solved with the .endswith() method, 
    But for the purpose of this challenge, we would like you
    to use one the JavaScript substring methods instead
*/

function confirmEnding(str, target){
    // the negative number is the number of elements from the end
    return str.substr(-target.length) === target;

}


console.log(confirmEnding("Bastian", "n"));