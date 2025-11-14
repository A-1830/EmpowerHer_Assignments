let num=5;
function Primenumber(num)
{
    let count=0
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }    
        if(count==5)
            {
                return true
            }else{
                    return false
                }
}
console.log(Primenumber(num));
//<!--check even odd-->


let num = 10;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + "is odd")
}
