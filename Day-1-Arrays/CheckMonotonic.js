// Check Monotonic Array 
// An array is monotonic if it is either monotone increasing or monotone decreasing. 
// An array is monotone increasing if all its elements from left to right are non-decreasing.
// An array is monotone decreasing if all  its elements from left to right are non-increasing. 
// Given an integer array return true if the given array is monotonic, or false otherwise. 

const CheckMonotonic = function (array) {
    const first = array[0]
    const last = array[array.length - 1]
    if(first === last) {
        for (let i = 1; i < array.length; i++) {
            if(array[i] !== array[i+1]) return false
        }
    } else if (first < last) {
        // non decreasing
        for (let i = 1; i < array.length; i++) {
            if(array[i] > array[i+1]) return false
        }
    } else {
        // non increasing
        for (let i = 1; i < array.length; i++) {
            if(array[i] < array[i+1]) return false
        }
    } return true
}

CheckMonotonic([1,2,3,4,5]) //true
CheckMonotonic([1,2,33,4,6,7,5]) //false
CheckMonotonic([3,3,3]) //true

// Time complexity O(n)
// space complexity O(1)

