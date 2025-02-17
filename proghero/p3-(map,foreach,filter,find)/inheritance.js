class Vehicle{
    //properties amra constructor er moddhe create kori
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    //method
    move(){
        console.log('the car is not working')
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat=seat;
        this.ticketPrice=ticketPrice;
    }

}

class Truck extends Vehicle{
constructor(name,price,load){
    super(name,price);
    this.load=load;
}
}

const main=new Bus('hp',230,20,123)
console.log(main)