// Given an array, 
// rotate the array to the right by k steps, 
// where k is non-negative.

const rotateArray = function (array, k) {
    const length = array.length
    k = k%length
    const temp = array.slice(length-k)
    for(let i = length - k - 1; i >= 0; i--) {
        array[i+k] = array[i]
    }
    for(let i =0; i < k; i++) {
        array[i] = temp[i]
    }

    return array
}

// Time complexity O(n)
// Space complexity O(k) => Auxilary spae 


// ================== better solution with beter complexity =================

const reverse = (nums, start, end) => {
    while(start<end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}

const rotateArray2 = (nums, k) => {
    k = k%nums.length //k=10, length=5, 2 rotations
    // nums.reverse()
    reverse(nums,0, nums.length-1)
    // start = 0, end = k-1
    reverse(nums,0, k-1)
    // start=k, end = length -1
    reverse(nums, k, nums.length-1)
    return nums
}

// Time complexity O(n)
// Space complexity O(1) => No auxialry space