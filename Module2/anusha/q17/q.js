//7.// a) Use spread operator to merge
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2]; 
console.log(merged)
// [1, 2, 3, 4, 5]

// b) Function using rest operator to return sum of all numbers
const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log(sum)

// c) Given object (no changes needed)
const user = {
name: "Alice",
age: 22,
address: {
    city: "Bangalore",
    pin: 560001 }
};
console.log(user)