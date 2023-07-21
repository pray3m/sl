/* ============ a. ARRAY METHODS ============ */
console.log("Array methods:");

// Creating an array
const myArray = [1, 2, 3, 4, 5];

// Array.isArray() : Checks if a value is an array
console.log(Array.isArray(myArray)); // Output: true

// Array.length : Returns the number of elements in an array
console.log(myArray.length); // Output: 5

// Array.push(): Adds elements to the end of an array.
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Array.pop() : Removes the last element from an array
const poppedElement = myArray.pop();
console.log(poppedElement); // Output: 6
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Array.join() : Joins all elements of an array into a string with a specified separator
const joinedArray = myArray.join("-");
console.log(joinedArray); // Output: "1-2-3-4-5"

// Array.includes() : Checks if an array includes a certain element
console.log(myArray.includes(3)); // Output: true
console.log(myArray.includes(10)); // Output: false

// Array.indexOf() : Returns the first index at which a given element can be found in an array
console.log(myArray.indexOf(4)); // Output: 3

// Array.sort() : Sorts the elements of an array
console.log(myArray.sort()); // Output: [1, 2, 3, 4, 5]

// Array.splice() : Adds/removes elements from an array
myArray.splice(0, 2, 10, 20);
console.log(myArray); // Output: [10, 20, 3, 4, 5]

// Array.forEach() : Calls a function for each array element
myArray.forEach((element) => console.log(element)); // Output: 1 2 3 4 5

// Array.map() : Creates a new array by performing a function on each array element
const mappedArray = myArray.map((element) => element * 2);
console.log(mappedArray); // Output: [20, 40, 6, 8, 10]

// Array.filter() : Creates a new array with array elements that pass a test
const filteredArray = myArray.filter((element) => element > 3);
console.log(filteredArray); // Output: [4, 5]

/* More array methods */

// Array.reverse() : Reverses the order of the elements in an array
console.log(myArray.reverse()); // Output: [5, 4, 3, 2, 1]

// Array.slice() : Extracts a section of an array and returns a new array
console.log(myArray.slice(0, 2)); // Output: [1, 2]

// Array.reduce() : Reduces an array to a single value by performing a function on each array element
const reducedArray = myArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reducedArray); // Output: 42

// Array.every() : Checks if all elements in an array pass a test
console.log(myArray.every((element) => element > 0)); // Output: true
console.log(myArray.every((element) => element > 10)); // Output: false

// Array.some() : Checks if some of the elements in an array pass a test
console.log(myArray.some((element) => element > 4)); // Output: true
console.log(myArray.some((element) => element > 10)); // Output: false

// Array.find() : Returns the value of the first element in an array that passes a test
console.log(myArray.find((element) => element > 3)); // Output: 4

// Array.findIndex() : Returns the index of the first element in an array that passes a test
console.log(myArray.findIndex((element) => element > 3)); // Output: 3

// Array.fill() : Fills the elements in an array with a static value
console.log(myArray.fill(0)); // Output: [0, 0, 0, 0, 0]

// Array.from() : Creates an array from an object
const myObject = { 0: "a", 1: "b", 2: "c", length: 3 };
console.log(Array.from(myObject)); // Output: ["a", "b", "c"]

// Array.of() : Creates an array from its arguments
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]

// Array.concat() : Joins two or more arrays and returns a new array
const myArray2 = [6, 7, 8, 9, 10];
console.log(myArray.concat(myArray2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array.flat() : Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const myArray3 = [1, 2, [3, 4, [5, 6]]];
console.log(myArray3.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log(myArray3.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

/* ============ b. NUMBER METHODS ============ */
console.log("\nNumber methods:");

// Number.isNaN() : Checks if a value is NaN (Not-a-Number)
console.log(Number.isNaN(10)); // Output: false
console.log(Number.isNaN("hello")); // Output: true

// Number.isFinite() : Checks if a value is a finite number
console.log(Number.isFinite(10)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

// Number.parseInt() : Parses a string and returns an integer
console.log(Number.parseInt("42")); // Output: 42
console.log(Number.parseInt("1010", 2)); // Output: 10

// Number.toFixed() : Formats a number using fixed-point notation with the specified number of digits after the decimal point
const num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"

// Number.toPrecision() : Formats a number to a specified length
console.log(num.toPrecision(2)); // Output: "3.1"

/* More number methods */

// Number.isInteger() : Checks if a value is an integer
console.log(Number.isInteger(10)); // Output: true

// Number.isSafeInteger() : Checks if a value is a safe integer
console.log(Number.isSafeInteger(10)); // Output: true

// Number.parseFloat() : Parses a string and returns a floating point number
console.log(Number.parseFloat("3.14")); // Output: 3.14

/* ============ c. STRING METHODS ============ */
console.log("\nString methods:");

const myString = "Hello, World!";

// String.length : Returns the number of characters in a string
console.log(myString.length); // Output: 13

// String.charAt() : Returns the character at the specified index in a string
console.log(myString.charAt(1)); // Output: e

// String.slice() : Extracts a section of a string and returns a new string
console.log(myString.slice(0, 5)); // Output: Hello

// String.toUpperCase() : Converts a string to uppercase
console.log(myString.toUpperCase()); // Output: "HELLO, WORLD!"

// String.includes() : Checks if a string includes a certain substring
console.log(myString.includes("World")); // Output: true
console.log(myString.includes("world")); // Output: false

// String.replace() : Replaces part of a string with another string
const newString = myString.replace("World", "Universe");
console.log(newString); // Output: "Hello, Universe!"

// String.split() : Splits a string into an array of substrings
console.log(myString.split(" ")); // Output: ["Hello,", "World!"]

// String.trim() : Removes whitespace from both ends of a string
const myString2 = "   Hello, World!   ";
console.log(myString2.trim()); // Output: "Hello, World!"

/* More string methods */

// String.concat() : Joins two or more strings
console.log(myString.concat(" ", "How are you?")); // Output: "Hello, World! How are you?"

// String.endsWith() : Checks if a string ends with a specified substring
console.log(myString.endsWith("World!")); // Output: true

// String.startsWith() : Checks if a string starts with a specified substring
console.log(myString.startsWith("Hello")); // Output: true

// String.indexOf() : Returns the index of the first occurrence of a specified substring in a string
console.log(myString.indexOf("World")); // Output: 7

// String.lastIndexOf() : Returns the index of the last occurrence of a specified substring in a string
console.log(myString.lastIndexOf("o")); // Output: 8

// String.search() : Searches a string for a specified substring and returns the position of the match
console.log(myString.search("World")); // Output: 7

// String.match() : Searches a string for a specified substring, and returns the matches
console.log(myString.match("World")); // Output: ["World"]

// String.repeat() : Returns a new string with a specified number of copies of an existing string
console.log(myString.repeat(2)); // Output: "Hello, World!Hello, World!"

/* ============ d. DATE METHODS ============ */
console.log("\nDate methods:");

// Creating a Date object
const currentDate = new Date();

// Date.getFullYear()  : Returns the year of a date
console.log(currentDate.getFullYear()); // Output: Current year (e.g., 2023)

// Date.getMonth() : Returns the month of a date
console.log(currentDate.getMonth()); // Output: Current month (0-11, where 0 represents January)

// Date.getDate() : Returns the day of the month of a date
console.log(currentDate.getDate()); // Output: Current day of the month (1-31)

// Date.getHours() : Returns the hour of a date
console.log(currentDate.getHours()); // Output: Current hour (0-23)

/* More date methods

- Date.getMinutes() : Returns the minutes of a date
-  Date.getSeconds() : Returns the seconds of a date
-  Date.getMilliseconds() : Returns the milliseconds of a date

/*

/* ============ e. WINDOW METHODS ============ */
console.log("\nWindow methods (Run this code in the browser console):");

// window.alert()
window.alert("Hello, World!");
// Explanation: The alert() method displays an alert dialog with the specified content.

// window.location
console.log(window.location.href); // Output: Current URL
// Explanation: The location property of the window object contains information about the current URL and allows navigation to new URLs.

// window.open()
window.open("https://www.google.com");
// Explanation: The open() method opens a new browser window or a new tab, depending on your browser settings.

// window.close()
window.close();
// Explanation: The close() method closes the current window.

// window.print()

// window.prompt()
const name = window.prompt("What is your name?");

// window.confirm()
const result = window.confirm("Are you sure?");

