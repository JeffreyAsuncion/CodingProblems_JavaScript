/*
    FreeCodeCamp
    JavaScript Coding Challenge #6: Return Largest Numbers in Arrays

    Return an array consisting of the largest number from each provided 
    sub-array. For simplicity, the provided array with contain exactly 4 sub arrays


*/



function findMax(arr){
    let largest = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}


function largestOfFour(arr){
    let tmp = 0;
    let results = [];
    for (let i=0; i<arr.length; i++){
        tmp = findMax(arr[i]);
        results.push(tmp);
        console.log("*".repeat(10));
    }
    return results;
}





// console.log(findMax([1,2,3333,3]));

console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]));