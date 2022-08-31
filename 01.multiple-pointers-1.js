/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should
 * find the first pair where the sum is 0. Return an array that includes both values that sum
 * to zero or undefined if a pair does not exit.
 * 
 * UEBSL
 * 
 * Understand the problem: i. a function that accepts a SORTED ARRAY OF INTEGERS; finds the FIRST
 * PAIR WHERE SUM IS 0. Returns an ARRAY INCLUDES BOTH VALUES THAT SUM TO ZERO or UNDEFINED IF
 * PAIR DOES NOT EXIST. ii. Inputs: sorted array of integers, iii. outputs: array with two values that
 * sum to zero or UNDEFINED, iv. All Info Available: YES: two values in the array that sum up to
 * zero. v. function name - sumZero, input name - sortedArr, output - resultArr or Undefined
 * 
 * Explore Concrete Examples: i. [-3,-2, -1, 0, 1, 2, 3] //returns [-3,3] 
 * ii. [0, 1, 2, 3] //returns undefined iii. ASSUME NO EMPTY INPUTS iv. ASSUME NO INVALID INPUTS
 * 
 * Break it down: i. Get the first element and add it to the next element ii. If sum is not zero,
 * proceed to add the first element and the third element iii. If sum is zero, return the two 
 * values iv. When all elements are done, and no matching pair was found, return undefined.
 * 
 */

//Solve/Simplify
//Method One
// let sumZero = (sortedArr) => {
//     for (let i = 0; i < sortedArr.length; i++) {
//         for (let j = i+1; j < sortedArr.length - 1; j++) {
//             if ((sortedArr[i] + sortedArr[j]) === 0) {
//                 return [sortedArr[i], sortedArr[j]]; 
//             }
//         }
//     }
// } //Time Complexity - O(n**2) Space Complexity - O(1)

// // Method two
// let sumZero = (sortedArr) => {
//     let left = 0;
//     let right = sortedArr.length -1;

//     while (left < right) {
//         let sum = sortedArr[left] + sortedArr[right];
//         if (sum === 0) {
//             return [sortedArr[left],sortedArr[right]];
//         } else if (sum > 0) {
//           right --;   
//         } else {
//             left ++;
//         }
//     }
// } //Time Complexity - O(n) Space Complexity - O(1)

//Practice solution
let sumZero = (arr) => {
	//create two pointers(indexes): one that starts from the smallest value and one that starts 
           //from the largest value
	let left = 0;
	let right = arr.length -1;
	
	//loop over my array for as long as my two pointers never overlap each other
	while (left < right) {
		//add values which pointers are pointing at
		let sum = arr[left] + arr[right];
	
		 //if sum === 0, I return the two pointers
		if(sum === 0) return [arr[left], arr[right]];

		 //if sum > 0, I move the right pointer one step down
		if(sum > 0) right --;
		 //if sum < 0, I move the left pointer one step up
        else left++;
	}
}


console.log(sumZero([-3,-2,-1,0,1,2,3,10])); //[-3,3]
console.log(sumZero([0,1,2,3,4])); //undefined
console.log(sumZero([-2,0,1,3])); //undefined
console.log(sumZero([1,2,3])); //undefined

