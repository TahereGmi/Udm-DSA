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