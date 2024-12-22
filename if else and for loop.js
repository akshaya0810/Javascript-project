//IF-ELSE:

//1)Check if a number is odd or even in JavaScript
var a = 22;
if (a % 2 == 0) {
   console.log("even")
} else {
    console.log("odd")
}
//2)Check if input variable is a number or not
// isNaN(input) - checks if input is not a number.
// !isNaN(input) - checks if input is a number.
let input = "123";
if (!isNaN(input)) {
    console.log("It's a number");
} else {
    console.log("Not a number");
}
//3)Find the largest of two number
let f = 5, d = 10;
if (f > d) {
    console.log(f + " is larger");
} else if (f < d) {
    console.log(d + " is larger");
} else {
    console.log("Both numbers are equal");
}
//4)Find the largest of three number
let h = 5, b = 10, c = 7;
if (h > b && h > c) {
    console.log(h + " is largest");
} else if (b > c) {
    console.log(b + " is largest");
} else {
    console.log(c + " is largest");
}
//5)Check if a triangle is equilateral, scalene, or isosceles
//Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
//Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
//Else “Scalene triangle.” since values of all sides are unequal.
let side1 = 8, side2 = 2, side3 = 6;
if (side1 == side2 && side2 == side3 && side1 == side3) {
    //An equilateral triangle has all three sides equal.
    console.log("Equilateral triangle.");
} else if (side1 == side2 || side2 == side3 || side1 == side3) {
    //An isosceles triangle has two sides equal.
    console.log("Isosceles triangle.");
} else {
    //A scalene triangle has all sides unequal.
    console.log("Scalene triangle.");
}
//6)Find the a number is present in given range
//Print “Between the range” if nums is between start and end values
//Else Print “Outside the range” since nums is outside start and end values.
let nums = 35, start = 10, end = 30;
if (nums >= start && nums <= end) {
    console.log("Between the range");
} else {
    console.log("Outside the range");
}
//7) Perform arithmetic operations on two numbers
//Print result of num1+num2 if operation is “add”
//Print result of num1-num2 if operation is “subtract”
//Print result of num1*num2 if operation is “multiply”
//Print result of num1/num2 if operation is “divide”
//Print result of num1%num2 if operation is “modulus”
//Else print “Invalid operation”
let num1 = 10, num2 = 5, operation = "modulus";
if (operation === "add") {
    console.log(num1 + num2);
} else if (operation === "subtract") {
    console.log(num1 - num2);
} else if (operation === "multiply") {
    console.log(num1 * num2);
} else if (operation === "divide") {
    console.log(num1 / num2);
} else if (operation === "modulus") {
    console.log(num1 % num2);
} else {
    console.log("Invalid operation");
}
//8)Find check if a year is leap year or not
//If year is divisble by 4 and not divisble by 100 then print “leap year”,Or if year is divisible by 400 then print “leap year”.
//Else print “not a leap year”.
let years = 2024;
if ((years % 4 === 0 && years % 100 !== 0) || (years % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
//9) Find the grade for input marks
//Print “S grade” if marks is between 90 and 100.
//Print “A grade” if marks is between 80 and 90.
//Print “B grade” if marks is between 70 and 80.
//Print “C grade” if marks is between 60 and 70.
//Print “D grade” if marks is between 50 and 60.
//Print “E grade” if marks is between 40 and 50.
//Print “Student has failed” if marks is between 0 and 40.
//Else print “Invalid marks”.
let marks = 101;
if (marks >= 90 && marks <= 100) {
    console.log("S grade");
} else if (marks >= 80 && marks < 90) {
    console.log("A grade");
} else if (marks >= 70 && marks < 80) {
    console.log("B grade");
} else if (marks >= 60 && marks < 70) {
    console.log("C grade");
} else if (marks >= 50 && marks < 60) {
    console.log("D grade");
} else if (marks >= 40 && marks < 50) {
    console.log("E grade");
} else if (marks >= 0 && marks < 40) {
    console.log("Student has failed");
} else {
    console.log("Invalid marks");
}
//10)Find number of days in a given month
//If month is outside the range of 1 and 12 print “Invalid month”.
//If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
//Else if month is equal to 4, 6, 9 or 11 print “30 days”.
//Else print “31 days”.
let month = 12
let yrs = 2024
if (month < 1 || month > 12) //(month <= 1 || month >= 12)
{
    console.log("Invalid month");
} 
else if (month === 2) {
    if ((yrs % 4 === 0 && yrs % 100 !== 0) || (yrs % 400 === 0)) {
        console.log("29 days");
    }
    else {
        console.log("28 days");
    }
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30 days");
} 
else {
    console.log("31 days");
}

///////////////////////////////////////////////////////////////////////////////////


//FOR :
//1)Write a JS code to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//2)Write a JS code to print a 2D array
//arr = [[1, 2],[3, 4],[5, 6]];
//Output: 1,2,3,4,5,6
let arrs = [[1, 2], [3, 4], [5, 6]];
let results = [];
for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
        results.push(arrs[i][j]);
    }
}
console.log(results.join(','));
//3) Write a JS code to print Even numbers in given array
let arrn = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arrn.length; i++) {
    if (arrn[i] % 2 === 0) {
        console.log("even number", arrn[i]);
    }
}
//4)Write a JS code to find the power of a number using for loop
let base = 2
let exponent = 3
let result = 1
for (let i = 0; i < exponent; i++) {
    result *= base;
    //result = result * base.
}
console.log(result);
//5) Write a JS code to print a pattern using for loop
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
//6) Write a JS code to find the no of digits in a number
let nume = 246810;
let digits = nume.toString().length;
console.log(digits);
//7)Write a JS code to calculate the sum of digits in a number
let num = 12345;
let sum = 0;
num.toString().split('').forEach(digit => {
    sum += parseInt(digit);
});
console.log(sum);
//8)Write a JS code to find the largest number in an array
let arrw = [10, 24, 45, 99, 67];
let largest = arrw[0];
for (let i = 1; i < arrw.length; i++) {
    if (arrw[i] > largest) {
        largest = arrw[i];
    }
}
console.log(largest);
//9) Write a JS code to find product of two arrays
//arr1 = [3,45,23,78,34];
//arr2 = [4,2,34,4,12,1];
//Output : [12, 90, 782, 312, 408, 1]
let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let product = [];
for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    product.push(arr1[i] * arr2[i]);
}
console.log(product);
//10).Write a JS code to find duplicate values in a given array.
let arr = [1, 2, 3, 4, 3, 5, 2, 6, 1];
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}
console.log(duplicates);
//11)Display a Same Text Five Times
let text = "Hello World";
for (let i = 0; i < 5; i++) {
    console.log(text);
}


////////////////////////////////////////////////////////////////////////////
//THIS BELOW ALL MYSELF WRITTENED CODE NOT AN TASK

//count the number of  vowel in string 
let string = "Hello, World!";
function countVowels(str) {
    let vowels = 'aeiouAEIOU'; // Define vowels
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels:", countVowels(string));

//inbuilt
function countVowels(str) {
    // Use match with a regex to find all vowels (case insensitive)
    let matches = str.match(/[aeiou]/gi);

    // If matches is null (no vowels found), return 0; otherwise return the length of the matches array
    return matches ? matches.length : 0;
}

let inputString = "Hello World";
let vowelCount = countVowels(inputString);

console.log("Number of vowels:", vowelCount); // Output: 3 (e, o, o)

//two sorded array into one array
function mergedsorted(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[i]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
console.log(mergedsorted([1, 3, 5], [2, 4, 6]));

//inbuilt
let ar1 = [1, 3, 5];
let ar2 = [2, 4, 6];

let mergedArray = [...ar1, ...ar2]

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


//return the second largest number
function sl(aar) {
    if (aar.length < 2) {
        return null;
    }
    //largest
    let l = -Infinity;
    //second largest
    let sl = -Infinity;

    for (let num of aar) {
        if (num > l) {
            sl = l;
            l = num;
        }
        else if (num > sl && num !== l) {
            sl = num;
        }
    }
    return sl != -Infinity ? sl : null;
}
console.log(sl([8, 2, 6, 4, 3]))

//inbuilt
let numbers = [8, 2, 6, 4, 3];

let secondLargest = [...new Set(numbers)] // Remove duplicates
    .sort((a, b) => b - a)[1];              // Sort in descending order and get the second element

console.log(secondLargest); // Output: 6

//Palindrome
function isPalindrome(str) {
    // Step 1: Normalize the string
    const normalizedStr = str.toLowerCase(); // Convert to lower case

    // Step 2: Reverse the string
    const reversedStr = normalizedStr.split('').reverse().join(''); // Reverse the string

    // Step 3: Compare the original and reversed strings
    return normalizedStr === reversedStr; // Return true if they are the same
}

// Test the function
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Level")); // Output: true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: false (punctuation is not handled in this simple code)

// example for palindrome: 
// mom=mom ->when i reverse it shows same it si palindrome
// rare=erar -> when it reverse not same it is not a palindrome


// Reversing a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
const strings = "akshaya";
const reversedString = reverseString(strings);
console.log(reversedString); // Output: ayahska

//Reversing an Array
function reverseArray(arr) {
    return arr.reverse();
}
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

//Reversing an Object
function reverseObject(obj) {
    const reversedEntries = Object.entries(obj).reverse();
    return Object.fromEntries(reversedEntries);
}
const object = { a: 1, b: 2, c: 3 };
const reversedObject = reverseObject(object);
console.log(reversedObject); // Output: { c: 3, b: 2, a: 1 }


// Using filter() to Get Even Numbers
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = values.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
