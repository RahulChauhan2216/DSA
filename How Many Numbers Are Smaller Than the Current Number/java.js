let nums = [8, 1, 2, 2, 3];

let count = 0;
let arr = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
            count++;
        }
    }
    arr.push(count);
    count = 0;
}

console.log(arr);