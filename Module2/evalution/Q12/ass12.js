///12 ///
const user = {
name: "Alex",
address: {
city: "Bangalore"
}
};
//a> access user.address.city safely
const city = user?.address?.city;
console.log(city); 
//b> access user.job.title
const jobTitle = user?.job?.title;
console.log(jobTitle); 
//c> exmaple of runtime
const anotherUser = {
name: "Beth"
};
const bio = anotherUser?.profile?.bio;
console.log(bio); 

