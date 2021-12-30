//  class Car {
//      constructor(name,wheels,doors,engine){
//         this.name = name;
//         this.wheels = wheels;
//         this.doors = doors;
//         this.engine = engine;

//     }
// }

// const venue = new Car ("venue",4,4,"v3");
// const bmwx6 = new Car ("bmw x6",4,4,"v6");
// const toyatolandcruiser = new Car ("toyato landcruiser",4,4,"v3");


// console.log(venue);
// console.log(toyatolandcruiser);
// console.log(bmwx6);



class Account {
    constructor(name,accountno,balance ) {
        this.name = name;
        this.accountno= accountno;
        this.balance= balance;

    }
    getBalance() {
        return  `The balance is : ₹${this.balance}`;

    }

    
   withdraw (amount){
       if (this.balance >= amount){
           this.balance = this.balance - amount;
           return this.getBalance();
       }else{
           return `Insufficient balance .${this.getBalance()}`
       
       }
    }
    deposit (amount){
        if
            (this.balance = this.balance + amount);
            return this.getBalance();
        }
    

}
const surya = new Account("surya",898,100000);
const praveen = new Account("praveen",535,200000);
const kalyan = new Account("kalyan",5455,300000);


console.log(surya); 
console.log(praveen);
 console.log(kalyan); 

 

 
 console.log(surya.getBalance()); 
 console.log(praveen.getBalance());
 console.log(kalyan.getBalance()); 


 console.log(surya.withdraw(30000));
 console.log(praveen.withdraw(70000));

 console.log(surya.deposit(150000));
 console.log(surya.getBalance());





 const getCountries = () => {
     console.log("gettingg...");
  const xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
      const countries = xhr.response;
      console.log("full data",countries);
  };
 };