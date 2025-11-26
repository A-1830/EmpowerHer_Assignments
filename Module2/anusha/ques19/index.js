
let age = 30;
function displayAge() {
  console.log("Current age:", age);
}
displayAge(); 
function changeAge(newAge) {
  age = newAge; 
  console.log("Age updated within function to:", age);
}

changeAge(45); 
displayAge();