"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Optional:
//
// Write a function that takes an array and returns an array contains the
// running sum of the original array
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Note that Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
const runningSumOfArray = (arr) => {
  //write your code here
  let runningSumArray = [];
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      sum += arr[i]
    }
    runningSumArray.unshift(sum)
    sum = 0
  }
  return runningSumArray;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two parameters (array and number) and remove all
// occurrences of the number in the array then return the array itself.
// Since it is impossible to change the length of the array in some languages,
// you must instead have the result be placed in the first part of the array
// to remove item from an array, replace it with underscore (_).
// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: nums = [2,2,_,_]
// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: nums = [0,1,3,0,4,_,_,_]
const removeElementFromArray = (arr, value) => {
  let arr1 = []
  let counter = 0
  for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] !== value) {
      arr1.unshift(arr[i])
    } else {
      arr1.push("_")
    }
  }
  return arr1;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Given an array of values use filter to extract odd values.
//
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]
// Output:
// [89, 41, 31, 111, 31]
//

const oddFiltration = (arr) => {
  let arr1=[]
for (let i=0; i<arr.length; i++){
  if(arr[i]%2!==0){
    arr1.push(arr[i])
  }
}
return arr1
};
// -------------------------------------------------------------------------------------------------------

module.exports = { runningSumOfArray, removeElementFromArray, oddFiltration };
