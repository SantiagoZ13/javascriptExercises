const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
// [
//   { name: "Bob", age: 22 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]

const words = ["banana", "apple", "cherry", "date"];
words.sort((a, b) => a.length - b.length);
console.log(words); // ["date", "apple", "banana", "cherry"]