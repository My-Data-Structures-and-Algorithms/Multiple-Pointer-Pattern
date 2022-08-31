/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts
 * the unique values in the array. There can be negative numbers in the array, but it will
 * always be sorted
 * 
 * UEBSL -> U: get a SORTED ARRAY and count how many UNIQUE VALUES are in that array. Array
 * can have negative numbers. Input: sorted array of numbers Output: number of unique values
 * All Info: Yes, Data-pieces: function-name: countUniqueValues, input: sortedArrm, 
 * output: result. E: countUniqueValues([1,1,2,2,3,4,22]) // returns 5,
 * 
 
 * [-2,-1,0,1,3,5] //returns 5, Empty Inputs: return O, Ignore Invalid Inputs B: I will use 
 * the multiple counters approach seeing that I am working with elements in single data
 * structure. 0. Check to see if array contains any values. 1. Create two pointers (one 
 * starting at first value and another at the second element) 2. Compare the two elements. 
 * If they are the not the same, increment count by one, move first counter to next value 
 * and second counter to next value, keep comparing the two until you reach the end of the 
 * array. 4. If they are the same, move on don't increment the counter. 5. return the value 
 * of count
 */

//Solve/Simplify
//countUniqueValues([1,1,1,1,1,2]) //2
//countUniqueValues([1,2,3,4,4,4,7,7,12,13]) //7
//countUniqueValues([]) //0
//countUniqueValues([-2,-1,-1,0,1]) //4 

//Method 1
// let countUniqueValues = (sortedArr) => {
//     //return 0 for empty array
//     if (sortedArr.length === 0) {
//         return 0;
//     }

//     let i = 0;

//     for (let j = 1; j < sortedArr.length; j++) {
//         if (sortedArr[i] !== sortedArr[j]) {
//             i++;
//             sortedArr[i] = sortedArr[j];
//         }
//     }

//     return i + 1;    
// }

//Method 2
//countUniqueValues([1,2,3,4,4,4,7,7,12,13]) //7
// let countUniqueValues = (sortedArr) => {
//     //return 0 for empty array
//     if (sortedArr.length === 0) {
//         return 0;
//     }

//     let count = 0
//     let i = 0;

//     for (let j = 1; j < sortedArr.length; j++) {
//         if (sortedArr[i] !== sortedArr[j]) {
//             i = j;
//             count += 1;
//         }
//     }

//     return count + 1;    
// }

//Method 3
let countUniqueValues = (sortedArr) => {
    if (sortedArr.length === 0) {
        return 0;
    }
    let staticPointer = 0; 
    let currentPointer = 1; 
    let counter = 1;

 while((staticPointer < sortedArr.length) && (currentPointer < sortedArr.length)) {
    if(sortedArr[staticPointer] !== sortedArr[currentPointer]) {
        counter += 1;
        staticPointer++;
        currentPointer++;
    } else {
        staticPointer++;
        currentPointer++;
    }
 } 

 return counter;
}

console.log(countUniqueValues([1,1,1,1,1,2])); //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2,-1,-1,0,1])); //4 