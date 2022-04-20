class PirkiniuKrepselis {
    constructor(){
        this.turinys = new Map()
        this.turinys.set('sureliai', 0);
        this.turinys.set('pienas', 0);
        this.turinys.set('duona', 0)
    }

    idetiSureli(kiekis){
        let sureliai = this.turinys.get('sureliai');
        this.turinys.set('sureliai', sureliai + kiekis);
    }

    idetiPieno(kiekis){
        let pienas = this.turinys.get('pienas');
        this.turinys.set('pienas', pienas + kiekis);
    }

    idetiDuonos(kiekis){
        let duona = this.turinys.get('duona');
        this.turinys.set('duona', duona + kiekis);
    }

    krepselioTurinys(){
        return console.log(this.turinys)
    }
}

export default PirkiniuKrepselis