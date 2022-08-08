console.log("Q1 Falsy or Truthy");

const filterOutFalsy = (elem1, elem2) => (!elem1 ? elem1 : elem2);

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, "Dog"));

console.log("Q2 Return the Length of Any Given Array");

const arrLength = (arr) => arr.length;

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

console.log("Q3 Get the Last Element in an Array");

const lastElem = (arr) => arr[arr.length - 1];

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));

console.log("Q4 Find the Sum of an Array");

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

console.log("Q5 Add Up the Numbers from a Single Number");

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

console.log("Q6 Calculate the Time");

function calcTime(num) {
  let seconds = num % 60;
  let minutes = Math.floor(num / 60);

  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

console.log("Q7 Find the Largest Number");

function getMax(arr) {
  let num = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }

  return num;
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

console.log("Q8 Reverse a String");

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));

console.log("Q9 Turn Every Element in an Array Into 0");

const converToZeros = (arr) => arr.map((elem) => 0);

console.log(converToZeros([5, 100, 0]));
console.log(converToZeros([12]));
console.log(converToZeros([1, 2, 3, 4, 5]));

console.log("Q10 Filter Out All the Apples");

const removeApples = (arr) => arr.filter((elem) => elem !== "Apple");

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));
console.log(removeApples(["Tomato", "Orange", "Banana"]));
console.log(removeApples(["Banana", "Orange", "Apple"]));

console.log("Q11 Filter Out All the Falsy Values");

const filterOutFalsyArr = (arr) => arr.filter((elem) => elem);

console.log(filterOutFalsyArr(["", [], 0, null, undefined, "0"]));
console.log(filterOutFalsyArr(["Tomato", "Orange", "Banana", false]));
console.log(filterOutFalsyArr(["Banana", "Orange", "Apple"]));

console.log("Q12 Truthy to True, Falsy to False");

const converToBoolean = (arr) => arr.map((elem) => !!elem);

console.log(converToBoolean([500, 0, "David", "", []]));
