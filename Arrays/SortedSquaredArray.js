// *** Sorted Squared Array ***
// You are given an array of Integers in which each subsequent value is not less than the previous value. 
// Write a function that takes this array as an input 
// and returns a new array with the squares of each number sorted in ascending order.


function SortedSquaredArray (array) {
    const newArray = new Array(array.length).fill(0);
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
// Time complexity is O(nlogn)
// Space complexity is O(n)

function SortedSquaredArray2 (array) {
    const newArray = new Array(array.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        const leftSquard = Math.pow(array[pointerLeft], 2)
        const rightSquard = Math.pow(array[pointerRight], 2)
        if(leftSquard > rightSquard) {
            newArray[i] = leftSquard
            pointerLeft ++
        } else {
            newArray[i] = rightSquard
            pointerRight --
        }
    }
    return newArray
}

a = [1,4,5,7]
b = [-6,-1,0,5,10]
c = []

console.log(SortedSquaredArray2(a))
console.log(SortedSquaredArray2(b))
console.log(SortedSquaredArray2(c))

// Out put 
// [1, 16, 25, 49]
// [0, 1, 25, 36, 100]
// []

// -------------> Time complexity is O(n)
// Space complexity is O(n)

