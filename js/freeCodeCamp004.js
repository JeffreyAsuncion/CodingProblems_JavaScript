/*
    FreeCodeCamp
    JavaScript Coding Challenge #4: Find the Longest Word in a String

    
*/



function findLongestWord(str){
    let long = 0;
    word = str.split(" ");
    let results = [];

    console.log(word);
    
    for(let i=0; i<word.length; i++){
        if(word[i].length > long){
            long = word[i].length;
        }
    }

    for(let i=0; i<word.length; i++){
        if(word[i].length === long){
            results.push(word[i])
        }
    }
    return results;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog."));
// console.log(findLongestWord(str));
// console.log(findLongestWord(str));
