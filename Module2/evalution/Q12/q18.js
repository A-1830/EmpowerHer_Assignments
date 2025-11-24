//a>>
if (true) {
    let x = 10;
    var y = 20;
}
console.log(y);
console.log(x);

//b access using optional chnaging
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
}
};
   console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
//c>>create the optional changing prevents a runtime error
const student={
    name:"anusha",
    address: {
        city: "Hyderabad"
    }
};
console.log(student?.address?.pincode);