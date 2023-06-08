let sentence = "athequickbrownfoxjumpsoverthelazydog";

let checkIfPangram = function (sentence) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (sentence.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;

};

console.log(checkIfPangram(sentence));






