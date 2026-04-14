// 1. Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  let positiveCount = 0;
  let negativeSum = 0;

  for (let num of input) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
    }
  }

  return [positiveCount, negativeSum];
}

const result = countPositivesSumNegatives(numbers);
console.log(result);

// 2. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else if (num === 0) {
    console.error(`0 не может быть отрицательным числом`);
  } else if (num > 0) {
    return num * -1;
  }
}

console.log(makeNegative(5));

// 3. Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1
// 2
//  +2
// 2
//  +2
// 2
//  =9.

const num = [1, 2, 2];

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] ** 2;
  }
  return sum;
}

console.log(squareSum(num));

// 4. Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  return `Hello, ${name}, how are you doing today?`;
}

console.log(greet("Kirill"));

// 5. Very simple, given a number, find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return number * -1;
}

console.log(opposite(-3));

// 6. Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      console.error("ERROR");
  }
}

console.log(basicOp("/", 670, 10));

// 7. Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):

function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("1 2 3 4 5 6"));

// 8. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

console.log(grow([1, 2, 3, 4, 5, 6]));

// 9. Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  if (0 <= score && score < 60) {
    return "F";
  } else if (60 <= score && score < 70) {
    return "D";
  } else if (70 <= score && score < 80) {
    return "C";
  } else if (80 <= score && score < 90) {
    return "B";
  } else if (90 <= score && score < 100) {
    return "D";
  } else {
    console.error(`ERROR`);
  }
}

console.log(getGrade(90, 50, 60));

// 10. Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase("uppercase"));
