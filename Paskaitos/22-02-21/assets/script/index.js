// Parašyti funkciją hello kurią paleidus ji konsolėje atspausdintų 'Hello Africa'. DONE!

function hello(){
    console.log('Hello, Africa');
}

hello();

// Parašyti funkciją helloWhat, kuri turi vieną parametrą ir kurią paleidus ji konsolėje atspausdintų 'Hello' + argumentas paduotas į parametrą. DONE!

function helloWhat(arg){
    console.log('Hello,',arg);
}

helloWhat('America');

// Parašyti funkciją su dviem parametrais kuri spausdintų jų sumą DONE!

function sum(arg1, arg2){
    console.log('Suma:', arg1 + arg2);
}

sum(5,7);
sum(11, 4);

//Modernus naudojimas: anoniminė funcija priskirta kintamajam
// Jei du kartus naudojamas tas pats vardas išmetama klaida,
//o su paprastu aprašymu imama paskutinė funkcija sąraše ir 
//nemetama klaida (sunku rasti kur klaida).
const suma = function(a, b){
    let suma = a + b;
    console.log(suma);
}
//anoniminės funkcijos iškvietimas
suma(4,6);

// Padaryti masyvą iš dviejų elementų. Pirmas masyvo elementas yra sumos funkcija, antras daugybos funkcija (iš ankstesnio užd) DONE!

let array = [];

array[0] = function(a, b) {console.log(a + b)};
array[1] = function (a, b) {console.log(a * b)};

array[0](7,6);
array[1](7,6);

// 31. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą.

const insert = function (arg){
    const heading = document.createElement('h1');
    heading.innerText = arg;
    document.body.appendChild(heading);
}
insert('Antraštė');

// 32. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai. Grąžina tų 
// skaičių sumą.

const sum32 = function (arg1, arg2){
    if(typeof arg1 == 'number' && typeof arg2 == 'number'){
        return arg1 + arg2;
    }else{
        return 'Bent vienas iš argumentų nėra skaičius.'
    }
}

console.log(sum32(6,8));

// 33. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai. Palygina tuos du 
// skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.

const measure = function(arg1, arg2){
    if(typeof arg1 == 'number' && typeof arg2 == 'number'){
        if(arg1 > arg2){
            return 'Didesnis pirmas skaičius.'
        }else if(arg2 > arg1){
            return 'Didesnis antras skaičius.'
        }else{
            return 'Skaičiai lygūs.'
        }
    }else{
        return 'Bent vienas iš argumentų nėra skaičius.'
    }
}

console.log(measure(2,6));

// 34. Parašyti funkciją, kuri priimtų vieną kintamajį. Turi patikrinti ar tai yra skaičiu ir ar tai yra 
// keturženklis skaičius. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.

const arkeliamieji = function(arg) {
    
}

// 35. Parašyti funkciją, kuri priimtų vieną kintamajį. Turi būti patikrinimas ar tas kintamasis yra 
// skaičius. Funkcija turi grąžinti skaičių, kur įvesto skaičiaus skaitmenys būtų išrikiuoti didėjimo 
// tvarka.



// 36. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos 
// (išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką 
// skaičių.



// 37. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį. Turi būti patikrinimas, kad 
// kintamasis yra masyvas, kad jo visi elementai yra skaičiai ir, kad jo ilgis yra 10. Funkcija turi 
// grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".



// 38. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad 
// kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)



// 39. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai -
// abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių 
// sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė.



// 40. Funkcija turi priimti du kintamuosius. Vienas turi būti skaičius, kitas masyvas su skaičiais ir 
// minimum 7 elementais. Funkcija turi grąžinti true, jei skaičius yra masyve, ir false, jei nėra tokio 
// skaičiaus masyve.


