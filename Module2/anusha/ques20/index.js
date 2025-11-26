function createCounter() {
  let count = 0;

  return {
 
    increment: function() {
      count++;
      console.log('Current count:', count);
    },
   
    decrement: function() {
      count--;
      console.log('Current count:', count);
    },
  
    display: function() {
      console.log('Current count:', count);
    }
  };
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement();

const createBankAccount = () => {
    let balance = 0; 
    const logAction = (action, amount, currentBalance) => {
        console.log(`${action}: ${amount}`);
    };

    return {
        deposit: (amount) => {
            if (amount > 0) {
                balance += amount;
                logAction("Deposited", amount, balance);
            }
        },
        withdraw: (amount) => {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                logAction("Withdrawn", amount, balance);
            } else {
                console.log("Insufficient balance");
            }
        },
        checkBalance: () => {
            console.log(`Current balance is: ${balance}`);
            return balance;
        }
    };
};
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance);
