'use strict';

// 1. Write a JavaScript program to find the sum of all the numbers in an array.
const numArr = [1,2,3,4,5];
const sum = function(arr){
  let sum = 0;
  for(let i=0;i<numArr.length;i++){
    sum += arr[i];
  }
  return sum;
}
console.log(`The answer for 1st problem is --> ${sum(numArr)}`);

// 2. Write a JavaScript program to find the largest and smallest elements in an array.
const bigAndSmall = function(arr){
  let small = arr[0];
  let large = arr[0];
  for(let i=1;i<arr.length;i++){
    small = (small > arr[i]) ? arr[i] : small;
    large = (large < arr[i]) ? arr[i] : large;
  }
  return [small,large];
}
const[smallNo,largeNo] = bigAndSmall(numArr);
console.log(`The answer for 2nd problem is --> smaller no is ${smallNo} and larger no is ${largeNo}`);

// 3. Write a JavaScript program to check if a given number is positive, negative, or zero.
const checkNo = function(num){
  return ((num > 0)? `${num} is a positive number` : 
  (num < 0) ? `${num} is a negative number` : `${num} is a zero`);
}

console.log(`The Answer for 3rd problem is --> ${checkNo(1)}`);

// 4. Write a JavaScript program to check if a given string, is a palindrome.
const str = "racecar";

const checkPalindrome = function(str){
  let strArr = str.split('');
  strArr = strArr.reverse();
  let revStr = strArr.join("");
  return (str === revStr ? `${str} it is a palindrome` : `${str} is not a palindrome`);
}
console.log(checkPalindrome(str));

const reverseString = function(str){
  let strArr = str.split("");
  let revStr = "";
  for(let i=strArr.length-1;i>=0;i--){
    revStr += strArr[i];
  }
  return revStr;
}

console.log(`Answer for 5th problem is ---> ${reverseString("welcome")}`)

// 6. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
const productOfSign = function(numOne,numTwo,numThree){
  let product = numOne * numTwo * numThree;
  if(product < 0){
    alert(`The sign is -`);
  }else{
    alert(`The sign is +`);
  }
}
productOfSign(3,-7,2);