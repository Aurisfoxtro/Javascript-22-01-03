class Krepsinis{

    static laikrodis = 0;
    static kelinio_laikrodis = 0;
    static atakos_laikrodis = 0;

    constructor(){
        this.komanda1 = 0;
        this.komanda2 = 0;
        this.atakuojanti_komanda = 1;
        this.kelinys = 1;
        this.rungtynes_baigesi = false;
    }

    init(){
        // while(Krepsinis.laikrodis < 2000){
            // console.log(this)
            let timeoutID = setTimeout(() => {this.play()}, Krepsinis.atakos_laikrodis)
            // let timeoutID = setTimeout(() => console.log('Testas'), 0);
            // console.log("timeout veikia", Krepsinis.laikrodis)
            // clearTimeout(timeoutID)
            console.log(this)
            console.log(Krepsinis)
        // }
    }

    getTimer(min = 100, max = 240){
        let laikrodukas = Math.floor(Math.random() * (max - min + 1) + min)
        Krepsinis.atakos_laikrodis = laikrodukas;

        return laikrodukas;
    }
    setClock(){
        Krepsinis.laikrodis += this.getTimer()
    }
    setQuarter(){
        this.kelinys = Math.floor(Krepsinis.laikrodis/6000)+1
    }
    getQuarter(){
        return this.kelinys
    }
    getScore(min = 0, max = 3){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    play(){
        if(this.atakuojanti_komanda === 1){
            this.komanda1 += this.getScore()
            this.setClock() 
            this.atakuojanti_komanda = 2
        }else{
            this.komanda2 += this.getScore()
            this.setClock()
            this.atakuojanti_komanda = 1
        }
        console.log("komanda1: ", this.komanda1);
        console.log("Komanda2: ", this.komanda2);
        console.log("--------------------");
    }
}

export default Krepsinis