// Given two strings s and t, determine if they are isomorphic. 
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself. 
// s and t consist of any valid ascii character. 

const checkIsomorphic = function (s, t) {
    if(s.length !== t.length) return false;

    const sHash = {};
    const tHash = {};
    for(let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];
        if(!sHash[charS]) sHash[charS] = charT;
        if(!tHash[charT]) tHash[charT] = charS;
        if(sHash[charS] !== charT || tHash[charT] != charS) return false;
    }
    return true;
}

// Time complexity O(n) => travers one time the strings
// Space complexity O(1) => ASCII charachters have fixed size (but it's also a question how ?????)