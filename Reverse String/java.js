let s = ["h","e","l","l","o"];

let reverseString = function(s) {
    let arr = [];
    for (let i = s.length-1; i >= 0; i--) {
        arr.push(s[i]); 
    }
 
    for (let i = 0; i < arr.length; i++) {
        s[i] = arr[i] 
    }
    return s;
};

console.log(reverseString(s));
