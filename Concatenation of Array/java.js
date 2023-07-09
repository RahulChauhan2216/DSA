let nums = [1, 2, 1];

let getConcatenation = function (nums) {

    let length = nums.length;
    for (let i = 0; i < length; i++) {
        nums.push(nums[i])
    }
    return nums;
};

console.log(getConcatenation(nums));


