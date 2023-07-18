let nums = [1, 2, 3, 4];

let decompressRLElist = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i += 2) {
        let one = nums[i];
        let two = nums[i + 1];
        for (let i = 0; i < one; i++) {
            arr.push(two);
        }
    }
    return arr;
};

console.log(decompressRLElist(nums));

