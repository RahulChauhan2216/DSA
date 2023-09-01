let nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];

var findDifference = function (nums1, nums2) {
  let arr1 = [[], []];
  let set1 = [...new Set(nums1)];
  let set2 = [...new Set(nums2)];
  for (let key of set1) {
    if (!nums2.includes(key)) {
      arr1[0].push(key);
    }
  }
  for (let key of set2) {
    if (!nums1.includes(key)) {
      arr1[1].push(key);
    }
  }
  return arr1;
};

console.log(findDifference(nums1, nums2));
