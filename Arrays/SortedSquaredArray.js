// *** Sorted Squared Array ***
// You are given an array of Integers in which each subsequent value is not less than the previous value. 
// Write a function that takes this array as an input 
// and returns a new array with the squares of each number sorted in ascending order.


function SortedSquaredArray (array) {
    const newArray = new Array(array.length);
    for (let i = 0; i < array.length; i ++) {
        newArray[i] = Math.pow(array[i], 2);
    }

    newArray.sort(function (a, b) { return a - b} );
    return newArray;
}


a = [2,3,4]
b = [-6,0,2,4]
c = []

console.log(SortedSquaredArray(a))
console.log(SortedSquaredArray(b))
console.log(SortedSquaredArray(c))

// Out put 
// [4, 9, 16]
// [0, 4, 16, 36]
// []