class Vehicle {
    // constructor(model, brand, price, weight, hasEngine, enginePower, topSpeed, passengers){
    constructor(model, brand){
        this.model = model;
        this.brand = brand;
        // this.price = price;
        // this.weight = weight;
        // this.hasEngine = hasEngine;
        // this.enginePower = enginePower;
        // this.topSpeed = topSpeed;
        // this.passengers = passengers;
    }
    setModel(model){
        this.model = model;
    }
    setBrand(brand){
        this.brand = brand;
    }
    setPrice(price){
        this.price = price;
    }
    setWeight(weight){
        this.weight = weight;
    }
    setEngine(engine){
        this.hasEngine = engine;
    }
    setEnginePower(power){
        this.enginePower = power;
    }
    setTopSpeed(speed){
        this.topSpeed = speed;
    }
    setPassengers(passengers){
        this.passengers = passengers
    }

}

export default Vehicle