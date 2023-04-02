// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water(depth is constant across containers). 
// Return the area(that the 2 lines and the X axis make) of container which can store the max amount of water. 
// Notice that you may not slant the container. 

const MaxAreaBruteForce = function (array) {
    // [3,7,5,6,8,4]
    let area = 0
    for(let i = 0; i < array.length -1; i++) {
        for(let j = i+1; j < array.length; j++) {
            const height = Math.min(array[i], array[j])
            const width = (j-i)
            area = Math.max(area, height*width)
        }
    }
    return area
}


// Time complexity O(n2) => 2 for loops
// Space complexity O(1) => No Auxilary space