class Troleibusas {
    constructor(){
        this.keleiviuSkaicius = 0;
    }

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius){
        this.visiKeleiviai = this.visiKeleiviai + keleiviuSkaicius;
    }

    ilipa(keleiviuSkaicius){
        if(keleiviuSkaicius > 0){
            this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
            Troleibusas.visiKeleiviai = Troleibusas.visiKeleiviai + keleiviuSkaicius;
        }
    }

    islipa(keleiviuSkaicius){
        if(keleiviuSkaicius > 0){
            this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
            Troleibusas.visiKeleiviai = Troleibusas.visiKeleiviai - keleiviuSkaicius;
        }
    }

    vaziuoja(){
        console.log("Troleibuse važiuoja ", this.keleiviuSkaicius)
    }

    static keleiviuSkaiciusVisuoseTroleibusuose(){
        console.log("Bendras skaičius visuose troleibusuose ", this.visiKeleiviai)
    }
}

export default Troleibusas