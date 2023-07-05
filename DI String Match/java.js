let s = "DDI";

let diStringMatch = function (s) {
    let x = s.split("");
    x.push("");
    let arr = [];

    let str = "";
    let count1 = 0;
    let count2 = s.length;

    for (let i = 0; i < x.length; i++) {
        if (x[i] == "" && x[i - 1] == "D") {
            str = count2;
            arr.push(str);
        }

        else if (x[i] == "" && x[i - 1] == "I") {
            str = count1;
            arr.push(str);
        }

        else if (x[i] == "I") {
            str = count1;
            arr.push(str);
            count1++
        }

        else if (x[i] == "D") {
            str = count2;
            arr.push(str);
            count2--
        }

    }
    return arr;
};

console.log(diStringMatch(s));

