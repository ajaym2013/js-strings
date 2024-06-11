// trim is use for remove extra space in string
let text1 = "hello world      ";
console.log(text1.trim());

// uppercase and lowercase tha string

let text2 = "hello world";
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());

// split is use for bracking string into array
let fruits =  "apple,banana,orange";
console.log(fruits.split(","));//output: ["apple", "banana", "orange"]

// join is use for combine array to string
let fruits1 = ["apple", "banana", "orange"];
console.log(fruits.join(","));//output: "apple, banana, orange"

// includes verify the string world is present in string or not
let text3 = "Hello, world!";
console.log(text3.includes("Hello"));

// toFixed is use for formatting numbers
let num = 12345.6789;
console.log(num.toFixed(2));//output: 12345.68

//Encoding and decoding strings for URL or HTML using encodeURIComponent(), decodeURIComponent(), escape(), and unescape().
let url = "https://www.example.com/?q=hello world";
console.log(encodeURIComponent(url));