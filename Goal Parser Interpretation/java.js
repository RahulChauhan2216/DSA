let command = "G()(al)"

var interpret = function (command) {
    let str =  "";

    for (let i = 0; i < command.length; i++) {

        if (command[i]=== "g" || command[i] === "G") {
            str = str + "G"  
        }
        else if (command[i] === "(" && command[i + 1] === ")") {
            str = str + "o";
        }
        else if (command[i] === "(" && command[i + 1] === "a" && command[i + 2] === "l" && command[i + 3] === ")") {
            str = str + "al";
        }
    }
    return str;
};

console.log(interpret(command));

