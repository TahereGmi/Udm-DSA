// You are given an array of Integers and another integer targetValue. 
// Write a function that will take these inputs
// and return the indices of the 2 integers in the array that add up targetValue.

function findIndicesSum (array, targetValue) {
    for(let i=0; i<array.length -1; i++) {
        for(let j=i+1; j<array.length; j++) {
            if(array[i] + array[j] === targetValue) {
                return [i,j]
            }
        }
    }
    return []
}


// array = [1,2,3,4,5] targetValue = 6
// console.log(findIndicesSum(array, targetValue))
// output = [0,4]

// Time Complexity O(n2)
// Space Complexity O(1)