//a>
arr1 = [1,2,3]
arr2 = [4,5]
const merged = [...arr1, ...arr2];
console.log(merged);
//b>
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 8, 4));
//c>
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

function extractUserProperties(user) {
  const { name, address: { city, pin } } = user;
  return { name, city, pin };
}
const result = extractUserProperties(user);
console.log(result);