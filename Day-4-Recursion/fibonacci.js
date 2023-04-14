// In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. 
// This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers. 
// The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. 
// Write a function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0.

// Method 1
const fibonacci = function (n) {
    if(n <=1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// 0,1,1,2,3,5,8,13,21,...

console.log(fibonacci(4))
// 3

// Time complexity O(2 power n)
// Space complexity O(n)


// Better solution with less time complexity
// Method 2

const fibonacci2 = function(n) {
    const ht = {0:0, 1:1};
    if(n in ht) {
        return ht[n];
    } else {
        ht[n] = fibonacci2(n-1) + fibonacci2(n-2);
        return ht[n];
    }
}

console.log(fibonacci(4))
// 3

// Time complexity O(n) => just execute every f(n) once and store in ht
// Space xomplexity O(n) => maximum depth of callStack or hash table is n

// Method 3
const fibonacci3 = function(n) {
    if(n <= 1) return n;
    let counter = 1;
    let prev = 0;
    let curr = 1;
    let next;
    while(counter < n) {
        next = prev + curr;
        prev = curr;
        curr = next
        counter++;
    }
    return curr;
}

// Time complexity O(n) => operate n times
// Space xomplexity O(1) => We did'nt use increasing space - just used prev and curr const base variables