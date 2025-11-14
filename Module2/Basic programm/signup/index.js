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