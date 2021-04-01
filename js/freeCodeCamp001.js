/*
    FreeCodeCamp
    JavaScript Coding Challenge #1: Reverese a String
*/

{
    function revString(string){
        // there is no reverse method for string
        // there is a reverse method for an array
        return string.split("").reverse().join("");
    }

    // function revString(str){
    //     let result = "";
    //     for(let i=str.length; i>=0; i--){
    //         result += str[i];
    //     }
    //     return result;
    // }


    console.log(revString("Hello!"));
    console.log(revString("JeffreyAsuncion"));

}