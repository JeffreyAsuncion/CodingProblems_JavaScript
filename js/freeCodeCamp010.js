/*
    FreeCodeCamp
    JavaScript Coding Challenge #10: Chunky Monkey 

    Write a function that splits an array `arr` into
    groups the length fo size `num` and returns them
    as a two-dimensional array

*/

// this doesnot always work correct, must loop thru
// function chunkArrayInGroups(arr, num){
//     let a = arr.slice(0,num);
//     let b = arr.slice(num);
//     return [a,b];
// }

function chunkArrayInGroups(arr, num){
    let groups = [];
    while(arr.length > 0) {
        groups.push(arr.slice(0, num));
        arr = arr.slice(num);
    }
    return groups;
}

console.log(chunkArrayInGroups([1,2,3,4,1,2,3,4], 2));
console.log(chunkArrayInGroups(["a","b","c","d"], 3));
console.log(chunkArrayInGroups([1,2,3,4,1,2,3,4], 3));
// console.log(chunkArrayInGroups(arr, num));
// console.log(chunkArrayInGroups(arr, num));