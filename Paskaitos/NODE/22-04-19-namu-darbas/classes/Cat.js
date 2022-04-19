class Cat {
    
    constructor(tiredness, hunger, lonliness){

        this.tiredness = tiredness;
        this. hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = Math.floor((tiredness + hunger + lonliness)/3)
    }
    
    feed(amount){
        this.hunger = this.hunger - amount;
        if(this.hunger < 0) this.hunger = 0;
    }
    sleep(amount){
        this.tiredness = this.tiredness - amount;
        if(this.tiredness < 0) this.tiredness = 0;
    }
    pet(amount){
        this.lonliness = this.lonliness - amount;
        if(this.lonliness < 0) this.lonliness = 0;
    }
    spendTime(amount){
        this.hunger = this.hunger + amount;
        this.tiredness = this.tiredness + Math.floor(amount/2);
        this.lonliness = this.lonliness + Math.floor(amount/3);
    }
    showCat(){
        console.log("------------------------")
        if(this.hunger == 0) console.log('Cat is very full.')
        if(this.hunger == 1) console.log('Cat is full.')
        if(this.hunger == 2) console.log('Cat is barely satiated.')
        if(this.hunger == 3) console.log('Cat is hungry.')
        if(this.hunger >= 4) console.log('Cat is very hungry.')
        if(this.tiredness == 0) console.log("Cat is very alert.")
        if(this.tiredness == 1) console.log("Cat is alert.")
        if(this.tiredness == 2) console.log("Cat is barely alert.")
        if(this.tiredness == 3) console.log("Cat is drowsy.")
        if(this.tiredness >= 4) console.log("Cat is very drowsy.")
        if(this.lonliness == 0) console.log("Cat had company recently.")
        if(this.lonliness == 1) console.log("Cat had company some time ago.")
        if(this.lonliness == 2) console.log("Cat had company long time ago.")
        if(this.lonliness == 3) console.log("Cat is lonely.")
        if(this.lonliness >= 4) console.log("Cat is very lonely.")
        console.log("------------------------")
    }
}

export default Cat