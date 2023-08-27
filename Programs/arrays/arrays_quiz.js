//Q1. Write a program in js to display the array elements.
let num = [10, 20, 30, 40, 50];
console.log("natural order")
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }
// num.forEach((element) => {
//   console.log(element);
// })

for (let n of num) {
  console.log(n);
}

for (let n in num) {
  console.log(n);
}

console.log("reverse order")
//Q2. Write a program in js to display the array elements in reverse.
// for (let i = num.length - 1; i >= 0; i--) {
//   console.log(num[i]);
// }

num.reverse().forEach((element) => {
  console.log(element);
})

//Q3. Write a program in js to find the sum of all elements of the array.
let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum = num[i] + sum;
// }
num.forEach((element) => {
  return sum = sum + element;
})
console.log("sum of[] : " + sum);

//Q4. Write a program in js to copy the elements of one array into another array. 
let numCopy = []; //empty array
// for (let i = 0; i < num.length; i++) {
//   //copying array
//   numCopy[i] = num[i];
// }

num.forEach((element, index) => {
  numCopy[index] = element;
})
console.log("copy arr[] : " + numCopy);

//Q5. Write a program in js to count a total number of duplicate elements in an array. @forEach, @reduce, @filter
let duplicate_nums = [10, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 40, 50];
let nCount = {};

duplicate_nums.forEach((num)=>{
  nCount[num] = (nCount[num] || 0) + 1;
})
console.log("original duplicate[] : ",duplicate_nums);
console.log("duplicate_element[count] : ",nCount);


//Q6. Write a program in js to print all unique elements in an array. @forEach, @reduce, @filter
//first way create a new item set
let uniqueSet = new Set(duplicate_nums);
console.log("unique{set of num} : ",uniqueSet);

//2nd way : using spread operator to collect all items in array[] itself from given set variable
let uniqueArrSet = [...uniqueSet];
console.log("unique[numbers] : ",uniqueArrSet);

//3rd way: remove duplicate elements from the array based on index comparing
let uniqueArr = duplicate_nums.filter((value, index, arr)=>{
  return arr.indexOf(value) === index;
})
console.log("uniqueArr[numbers] : ",uniqueArr);


//Q7. Write a program in js to merge two arrays of same size and sorted in descending order.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergeArr = arr1.concat(arr2);
let compare = (a, b) => {
  return b - a;
}
console.log("mergeArr : ", mergeArr.sort(compare));

//Q8. Write a program in js to count the frequency of each element of an array. @forEach, @reduce, @filter 
//phrase : “The Key to happiness is the reduction of desires.”

let phrase = "The Key to happiness is the reduction of desires";
let phraseChar = Array.from(phrase);
let count = {}; //json object [key, value]
console.log("pharse arr[] : ", phraseChar);

phraseChar.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
})
console.log("element frequency : " + JSON.stringify(count));

//Q9. Write a program in js to find the maximum and minimum element in an array. @forEach, @reduce, @filter
const numbers = [12, 5, 23, 8, 45, 19];
const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log("Maximum:", max);
console.log("Minimum:", min);



//Q10. Write a program in js to separate odd and even integers in separate arrays. @forEach, @reduce, @filter
let numArr = [1,3,4,5,66,60,40,30,21,11,13,17,18,19,10,2];

let evenNum = numArr.filter((anyNum)=>{
  return anyNum%2==0;
})

let oddNum = numArr.filter((anyNum)=>{
  return anyNum%2==1;
})
console.log("odd[] : " + oddNum);
console.log("evenNum[] : " + evenNum);

//Q11. Write a program in js to sort elements of array in ascending /descending order.
let ascendingOrder = (a, b) => { return a - b; }
let descendingOrder = (a, b) => { return b - a; }
let randomNum = [3, 55, 6, 71, 1, 33, 4, 2];
console.log("randomNum : ", randomNum);
console.log("ascendingOrder : ", randomNum.sort(ascendingOrder));
console.log("descendingOrder : ", randomNum.sort(descendingOrder));

//Q12. Write a program in js to convert a word into char[].
let word = "Siddhartha";
let ch = Array.from(word);
console.log(ch);

//Q13. Write a program in js to sum all elements of the array. @reduce
console.log("original num[] : " + num);
let result = num.reduce((n1, n2, index) => {
  let r = n1 + n2;
  console.log(r, index);
  return r;
})

//Q14. Write a program in js to square each elements of the array.
console.log("original num[] : " + num);
let sqrArr = num.map((n) => { return n * n })
console.log("sqrArr[] : ", sqrArr);

//Q15. Write a program in js to get factorial for given array. 5! = 5*4*3*2*1 = 120 
let factArr = [1, 2, 3, 4, 5];
let fact = factArr.reduce((n1, n2) => { return n1 * n2; });
console.log("factorial of " + factArr.length + "! : " + fact);

//Q16. Write a program in js to find return value is type of an array from a method.
console.log("is array? :: ",Array.isArray(num));
console.log("is array? :: ",Array.isArray(duplicate_nums));
console.log("is array? :: ",Array.isArray(count));

//Q17. Write a program in js to find the first 3 elements of an array.
let fruits = ["apple","manago","banana","guava","carrot","grapes","orange"];
let first3 = fruits.slice(0,3);
console.log(first3);

//Q18. Write a program in js to find the last 3 elements of an array.
let last2 = fruits.slice(-2);
console.log(last2);

//Q19. Write a program in js to extract elements of an array for given range.
let piece = fruits.slice(1,4);
console.log(piece);

//Q20. Write a program in js to remove elements of an array for given range.
console.log("available items : ",fruits);
let soldItem = fruits.splice(2,4);
console.log("sold Item : ",soldItem);
console.log("stock Item : ",fruits);

//Q21. Write a program in js to add/push elements at specific position of an array as starting.
fruits.splice(2,0,1,2,3,4);
console.log("stock Item : ",fruits);