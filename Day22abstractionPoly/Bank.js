class Account{
    constructor(accountNumber,accountHolder,balance){
        this.accountNumber  = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }
     
    checkBalance(){
        return `account Balance - ${this.balance}`
    }

    deposit(amount){
        // this.balance = this.balance  + amount;
        this.balance += amount
        return `Total Balance after ${amount} added ${this.balance}`
    }

    withdraw(amount){
        if(this.balance > amount){
            this.balance -= amount
            return `Left Balance ${this.balance}`
        }else{
            return `Insufficient amount`
        }
    }

}


class ATM extends Account{
    constructor(accountNumber,accountHolder,balance){
       super(accountHolder,accountNumber,balance)
    }
    performOperations(operation,amount){
        switch(operation){
            case "1" :
               return this.checkBalance()
            case "2" : 
                return this.deposit(amount)
            case "3" :
                return this.withdraw(amount)
                
            default : return "Invalid"    
        }

    }
}


let obj = new ATM("123","Indumati",250)


console.log(obj.performOperations("1"))
console.log(obj.performOperations("2",250))
console.log(obj.performOperations("1"))
console.log(obj.performOperations("3",250))
console.log(obj.performOperations("1"))
console.log(obj.performOperations("3",600))