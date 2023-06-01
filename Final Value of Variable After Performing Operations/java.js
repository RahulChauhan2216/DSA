let operations = ["++X","++X","X++"];

function count(input) {
    let X = 0;

    for (let i = 0; i < input.length; i++) {

        if (operations[i] === "--X" || operations[i] === "X--") {
            X--;
        } else {
            X++;
        }    
    }
    return X;

}

console.log(count(operations));

