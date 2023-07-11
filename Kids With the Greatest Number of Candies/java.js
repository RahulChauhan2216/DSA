let candies = [2, 3, 5, 1, 3], extraCandies = 3;

let kidsWithCandies = function (candies, extraCandies) {
    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i]
        }
    }

    let arr = [];
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= max) {
            arr.push(true);
        }
        else{
            arr.push(false)
        }
    }
    return arr;

};

console.log(kidsWithCandies(candies,extraCandies));