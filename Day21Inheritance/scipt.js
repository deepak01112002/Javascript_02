// inheritance

class CreditCard{
    constructor(billing,shopping,ElectricBill){
        this.billing = billing,
        this.shopping = shopping,
        this.ElectricBill = ElectricBill
    }
    getVal(){
        console.log(`Billing : ${this.billing}, Shopping : ${this.shopping}, Elc : ${this.ElectricBill} Cashback : ${this.cashback}`)
    }

}


class FlipkartCredit extends CreditCard  {
    constructor(billing,shopping,ElectricBill,cashback){
        super(billing,shopping,ElectricBill)
        this.cashback = cashback
    }
}


class AmazonCredit extends CreditCard{
    constructor(billing,shopping,ElectricBill,cashback,amazonPrime){
        super(billing,shopping,ElectricBill,cashback)
        this.amazonPrime = amazonPrime
        
    }
}

const FlC = new AmazonCredit(true,true,true,true,true);
console.log(FlC)