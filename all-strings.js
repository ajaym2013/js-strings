// How to Write strings
let name = "Hello World";

// How  to add two strings
let firstName = "Ajay";
let lastName = "Maurya";

console.log(firstName + " " + lastName);

//how to get length of string

let text = "hello";
console.log(text.length);

// how to acess individual characters of a string

let char = "hello";
console.log(char.str[0]);
console.log(char.str[1]);

// how to extract or slice world form string

let text1 = "hello, world!";
console.log(text1.substring(0, 5));
// console.log(text1.slice(0, 5));

// how to index of substring within a string using methods like indexOf() or search().

let text2 = "Hello, world!";
console.log(text2.indexOf("world"));

// how to replace a world in string

let text3 = "hello world";
console.log(text3.replace("world", "everyone"));

// how to convert number to string

let num = 1234;
console.log(num.toString());

// how to use bactics or literals in string

let name1 = "Ajay";
let age = "24";
console.log(`my name is ${name1} and age is ${age}`);