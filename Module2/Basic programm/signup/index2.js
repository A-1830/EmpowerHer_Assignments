let users = [];  
function signup(username) {
    let exists = users.some(user => user.username === username);

    if (exists) {
        return "User Already Registered, Please Login!";
    } else {
        users.push({ username: username, password: "EMP@123" });
        return "Signup Successful! Please Login.";
    }
}
console.log(signup("anusha"));
console.log(signup("anusha"));

//login//
let users = [
    { username: "anusha", password: "EMP@123" }
];  

function login(username, password) {
let user = users.find(user => user.username === username);
if (!user) {
        return "User Not Found, Please Signup!";
    } else if (user.password === password) {
        return "Login Successful!";
    } else {
        return "Password is Incorrect!";
    }
}
console.log(login("anusha", "EMP@123"));
console.log(login("anusha", "wrongpass"));
console.log(login("unknown", "EMP@123"));