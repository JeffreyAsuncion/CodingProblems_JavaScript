/*
    FreeCodeCamp
    JavaScript Coding Challenge #9: Truncate a string

    Truncate a string `str` 
    if it is longer than the given maximum string length `num`

    return the truncated string with a ... ending.

    Note that inserting 
    the three dots to the end will add to the string length

    However, if the given maximum string length 
    `num` is less than or equal to 3, 
    then the adition of the three dots does not add
    to the string length in determining the truncated string.


*/

function truncateString(str, num){
    if (str.length <= 3) return str + "...";

    if (str.length > num) {
        return str.substr(str.length-3-num) + "..."
    }
    return str
}

console.log(truncateString("alskdfhjl ashdfklas", 7));
console.log(truncateString("asdfhashdfjklaskljdfhkjasdh",5));
console.log(truncateString("asdfkhkasdhklfjhasd", 11));
console.log(truncateString("asdfhgkasdhfj", 4));