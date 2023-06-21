let names = ["Mary", "John", "Emma"], heights = [180, 165, 170];

let sortPeople = function (names, heights) {

    let obj = {};
    let arr = [];
    let arr2 = [];

    for (let i = 0; i < names.length; i++) {
        if (obj[heights[i]] == undefined) {
            obj[heights[i]] = names[i];
        }
    }

    for (let key in obj) {
        let x = (`${obj[key]}`);
        arr.push(x);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;

};
console.log(sortPeople(names, heights));




