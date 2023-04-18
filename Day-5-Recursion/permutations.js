// Given an integer array of unique elements, return all possible subsets (the power set). 
// The solution set must not contain duplicate subsets. 
// Return the solution in any order. 

const allPermutation = function (nums) {
    const permutation = [];
    function helper (nums, i) {
        if(i === nums.length - 1) {
            permutation.push(nums.slice());
            return;
        }
        for (let j=i; j<=nums.length; j++) {
            // swap i,j
            [nums[i], nums[j]] = [nums[j], nums[i]];
            // recursive
            helper (nums,i+1);
            // swap i,i
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    helper (nums, 0);
    return permutation;
}