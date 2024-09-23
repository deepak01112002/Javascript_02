class Car{
    constructor(brand){
         this.brand = brand
    }

    play2(){
        return `${this.brand} speaker is Running.... 1`
    }
}

class Car2 extends Car{
    constructor(brand,brand2){
        super(brand)
        this.brand = brand2
    }

    play2(){
        return `${this.brand} speaker is Running.... 2`
    }
}

const data = new Car2("JBL")

console.log(data.play())