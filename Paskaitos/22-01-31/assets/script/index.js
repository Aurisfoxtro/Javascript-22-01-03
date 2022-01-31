console.log('--------------(pirma užduotis)---------------------------------');

var vardas = 'Aurimas';
var pavarde = 'Tatarūnis';
var gimtadienis = '1983-12-19';

console.log('Aš esu ' + vardas + ' ' + pavarde + ' gimęs ' + gimtadienis);

/*-------------------------(antra užduotis)----------------------------------- */

function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

console.log('--------------(trečia užduotis)---------------------------------');

var random1 = randomSkaicius(0,4);
var random2 = randomSkaicius(0,4);

console.log('random1: ' + random1);
console.log('random2: ' + random2);
console.log('Sudėję gavom: ' + (random1+random2));
console.log('Atėmę gavom: ' + (random1-random2));
console.log('Padauginę gavom ' + (random1*random2));
console.log('Padalinę gavom ' + (random1/random2));

console.log('--------------(ketvirta užduotis)---------------------------------');

var pirmas = randomSkaicius(0,25);
var antras = randomSkaicius(0,25);
var trecias = randomSkaicius(0,25);

console.log('Pirmas skaičius: ' + pirmas);
console.log('Antras skaičius: ' + antras);
console.log('Trečias skaičius: ' + trecias);
console.log('Minimumas: ' + Math.min(pirmas,antras,trecias));
console.log('Maksimumas: ' + Math.max(pirmas, antras, trecias));