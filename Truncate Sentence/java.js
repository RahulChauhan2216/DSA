let s = "Hello how are you Contestant", k = 4;


var truncateSentence = function (s, k) {
    let x = s.split(" ");
    let y;
    let str = '';

    for (let i = 0; i < x.length; i++) {

        if (i < k) {
            str = str + x[i] + " ";
            y = str.slice(0,str.length-1)
        }
    }
    return y;
};

console.log(truncateSentence(s, k));