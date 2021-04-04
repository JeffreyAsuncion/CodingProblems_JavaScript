/*
    FreeCodeCamp
    JavaScript Coding Challenge #5: Capitaliza the first letter of each word
    
*/

function titleCase(str){
    str = str.toLowerCase();
    let n_str = "";
    let new_str = "";
    words = str.split(" ");
    for (let i = 0; i <words.length; i++){
        n_str = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        new_str += n_str + ' ';
    }
    return new_str;
}


console.log(titleCase("I'm a little tea pot"));