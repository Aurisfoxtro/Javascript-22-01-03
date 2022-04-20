class Pinigine {
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }
    ideti(kiekis){
        if(kiekis < 3 && kiekis > 0){
            this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
        }else{
            if(kiekis > 0){
                this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
            }
        }
    }
    skaiciuoti(){
        console.log("Viso pinigų ", this.popieriniaiPinigai + this.metaliniaiPinigai)
    }
}

export default Pinigine