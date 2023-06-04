let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

var mostWordsFound = function (sentences) {

    let init = 0;
    for (let i = 0; i < sentences.length; i++) {

        let x = sentences[i].split(" ").length;
        if (x > init) {
            init = x;
        }
    }
    return init;
    
};


console.log(mostWordsFound(sentences));







        // let x = sentences[i].split(" ");
        // if (x.length > init.length) {
        //     init = x.length;  
        // }






