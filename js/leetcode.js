/*
290. Word Pattern
Easy
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", s = "dog dog dog dog"
Output: false
*/


{
    function wordPattern(pattern, s) {
        // create 2 maps for 
        let d1 = new Map;
        let d2 = new Map;

        let words = s.split(" ");
        
        if(words.length !== pattern.length){
            return False;
        }
        for(var i=0; i<words.length; i++){
            // this is to fill the map
            if(!d1.has(words[i]) && !d2.has(pattern[i])){
                d1.set(words[i], pattern[i]);
                d2.set(pattern[i], pattern[i]);
            }
            // check if map does not matche pattern
            else if(d1.get(words[i]) !== pattern[i]){
                return false;    
            }
        }
        // if you get here pattern matches
        return true;
    }    
    
    // Example 1:
    pattern = "abba";
    s = "dog cat cat dog";
    console.log(wordPattern(pattern, s));
    // Output: true
    
    // Example 2:
    pattern = "abba";
    s = "dog cat cat fish";
    console.log(wordPattern(pattern, s));
    // Output: false

    // Example 3:
    pattern = "aaaa";
    s = "dog cat cat dog";
    console.log(wordPattern(pattern, s));
    // Output: false

    // Example 4:
    pattern = "abba";
    s = "dog dog dog dog";
    console.log(wordPattern(pattern, s));
    // Output: false

}