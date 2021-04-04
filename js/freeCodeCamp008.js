/*
    FreeCodeCamp
    JavaScript Coding Challenge #8: Repeat a string repeat a string

    Repeat a given string `str`, `num` times. 
    Return an empty str if num is not a positve number
*/

// function repeatStringNumTimes(str, num){
//     if (num <= 0) return "";
//     return str.repeat(num);
// }

// function repeatStringNumTimes(str, num){
//     let results = "";
//     if (num <= 0) return "";
//     for (let i=0; i<num; i++){
//         results += str;
//     }
//     return results;
// }


function repeatStringNumTimes(str, num){
    // base case 0
    if (num <= 0) return "";
    // base case 1
    if (num === 1) return str;

    // str and call recursion with a decrement
    return str + repeatStringNumTimes(str, num - 1)

}
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", -2));