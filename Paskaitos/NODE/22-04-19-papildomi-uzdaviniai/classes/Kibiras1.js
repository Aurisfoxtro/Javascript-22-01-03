class Kibiras1 {
    constructor(){
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni(){
        return this.akmenuKiekis = this.akmenuKiekis + 1; 
    }
    pridetiDaugAkmenu(kiekis){
        return this.akmenuKiekis = this.akmenuKiekis + kiekis;
    }
    kiekPririnktaAkmenu(){
        return console.log("Iš viso pririnkta " ,this.akmenuKiekis);
    }
}

export default Kibiras1