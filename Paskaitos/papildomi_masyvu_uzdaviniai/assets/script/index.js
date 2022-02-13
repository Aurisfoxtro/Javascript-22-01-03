// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra 
// atsitiktiniai skaičiai nuo 5 iki 25.

function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

let array = [];

for(let i = 0; i < 30; i++){
    array[i]=randomSkaicius(5,25);
}
console.log(array);
console.log('--------------------------------');
// 2. Naudodamiesi 1 uždavinio masyvu:
// a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let sum = 0;

for(let i = 0; i < 30; i++){
    if (array[i] > 10){
        sum++;
    }
}
console.log('Masyve yra ' + sum + ' reikšmių didesnių už 10.');
console.log('--------------------------------');
// b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

let indexes = [];
let max = 0;

for(let i = 0; i < 30; i++){
    if(array[i] > max){
        max = array[i];
    }
}

for(let i = 0; i < 30; i++){
    if (max == array[i]){
        indexes.push(i);
    }
}
console.log('Didžiausia masyvo reikšmė yra ' + max + ' ir ji yra ' + indexes + ' pozicijose.');
console.log('--------------------------------');
// c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;



// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos 
// reikšmės indeksas;



// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad 
// bendras masyvas padidėtų iki indekso 39;



// f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš 
// neporinių indekso reikšmių, o kitas iš porinių;



// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie 
// didesni už 15;



// h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;



// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. 
// Suskaičiuokite kiek yra kiekvienos raidės.



// 4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.



// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
// Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).



// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio 
// masyve, bet nėra antrame 5 uždavinio masyve.



// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.



// 8. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 
// 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto 
// suma ir t.t.



// 21. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės 
// skaičiai nuo 1 iki 10 ([1,2,3,4,5,6,7,8,9,10]).

let array21 = [];

for(let i = 0; i < 100; i++){
    let array211 = [];
    for(let j = 0; j < 10; j++){
        array211[j] = j + 1;
    }
    array21[i] = array211;
}
console.log(array21);
console.log('---------------------------------');
// 22. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės 
// atsitiktiniai skaičiai nuo 1 iki 17.

let array22 = [];

for(let i = 0; i < 100; i++){
    let array221 = [];
    for(let j = 0; j < 10; j++){
        array221[j] = randomSkaicius(1, 17);
    }
    array22[i] = array221;
}
console.log(array22);
console.log('---------------------------------');
// 23. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 
// 18, o reikšmės – skaičiai nuo 1 iki masyvo ilgio.

let array23 = [];

for(let i = 0; i < 100; i++){
    let array231 = [];
    let ilgis = randomSkaicius(5, 18);
    for(let j = 0; j < ilgis; j++){
        array231[j] = j + 1;
    }
    array23[i] = array231;
}
console.log(array23);
console.log('---------------------------------');
// 24. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 
// 18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 30.

let array24 = [];

for(let i = 0; i < 100; i++){
    let array241 = [];
    let ilgis = randomSkaicius(5, 18);
    for(let j = 0; j < ilgis; j++){
        array241[j] = randomSkaicius(5, 30);
    }
    array24[i] = array241;
}
console.log(array24);
console.log('---------------------------------');
// 25. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 
// 18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 75. Surasti didžiausią skaičių visame didžiajame 
// masyve.

let array25 = [];
let max25 = 0;

for(let i = 0; i < 100; i++){
    let array251 = [];
    let ilgis = randomSkaicius(5, 18);
    for(let j = 0; j < ilgis; j++){
        array251[j] = randomSkaicius(5, 75);
    }
    array25[i] = array251;
}
console.log(array25);

for(let i = 0; i < 100; i++){
    for(let j = 0; j < array25[i].length; j++){
        if(array25[i][j] > max25){
            max25 = array25[i][j];
        }
    }
}
console.log('Didžiausia masyvo reikšmė: ' + max25);
console.log('-------------26--------------------');
// 26. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 
// 18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 75. Surasti mažiausią skaičių visame didžiajame 
// masyve ir kiek kartų jis pasikartojo.

let array26 = [];
let min26 = 75;
let min_kiekis = 0;

for(let i = 0; i < 100; i++){
    let array261 = [];
    let ilgis = randomSkaicius(5, 18);
    for(let j = 0; j < ilgis; j++){
        array261[j] = randomSkaicius(5, 75);
    }
    array26[i] = array261;
}
console.log(array26);

for(let i = 0; i < 100; i++){
    for(let j = 0; j < array26[i].length; j++){
        if(array26[i][j] < min26){
            min26 = array26[i][j];
        }
    }
}

for(let i = 0; i < 100; i++){
    for(let j = 0; j < array26[i].length; j++){
        if(array26[i][j] == min26){
            min_kiekis++;
        }
    }
}
console.log('Mažiausia masyvo reikšmė: ' + min26 + ', reikšmė pasikartojo ' + min_kiekis + ' kartų');
console.log('--------------27-------------------');
// 27. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės 
// atsitiktiniai skaičiai nuo 1 iki 17. Išrykiuoti vidinių masyvų reikšmes didėjančia tvarka.

let array27 = [];

for(let i = 0; i < 100; i++){
    let array271 = [];
    for(let j = 0; j < 10; j++){
        array271[j] = randomSkaicius(1, 17);
    }
    array27[i] = array271;
}
for(let i = 0; i < 100; i++){
    array27[i].sort(function(a,b){return a-b});
}
console.log(array27);
console.log('---------------28------------------');
// 28. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės 
// atsitiktiniai skaičiai nuo 1 iki 17. Perrikiuoti vidinius masyvus pagal vidinių masyvų reikšmių 
// sumas didėjančia tvarka.

let array28 = [];
let array28s = [];
let array28_sorted = [];

for(let i = 0; i < 100; i++){
    let array281 = [];
    for(let j = 0; j < 10; j++){
        array281[j] = randomSkaicius(1, 17);
    }
    array28[i] = array281;
}
console.log(array28);

for(let i = 0; i < 100; i++){
    array28s[i] = 0;
    for(let j = 0; j < 10; j++){
        array28s[i] += array28[i][j];
    }
}
console.log(array28s);

for(let i = 0; i < 100; i++){
    let min_s = 9999;
    let min_index;
    for(let j = 0; j < 100; j++){
        if(array28s[j] < min_s) {
            min_s = array28s[j];
            min_index = j;
        }
    }
    array28_sorted[i] = array28[min_index];
    array28s[min_index] = 9999;
}
console.log(array28_sorted);
console.log('---------------29------------------');
// 29. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės 
// atsitiktiniai skaičiai nuo 1 iki 17. Iš dvimačio masyvo sukurti vieną vienmatį masyvą – visas 
// dvimačio masyvo masyvų reikšmes perkelti į naują masyvą.

let array29 = [];
let combined = [];

for(let i = 0; i < 100; i++){
    let array291 = [];
    for(let j = 0; j < 10; j++){
        array291[j] = randomSkaicius(1, 17);
    }
    array29[i] = array291;
}
console.log(array29);

for(let i = 0; i < 100; i++){
    for(let j = 0; j < 10; j++){
        combined.push(array29[i][j]); 
    }
}
console.log(combined);
console.log('----------------30-----------------');
// 30. Papildyti 29 uždavinį taip, kad surastų skaičių vidurkį ir palygintų jį su vidurinia reikšme, 
// kuris didesnis. Jei elementų yra nelyginis skaičius, pvz 9, tai vidurinė reikšmė bus 5-as 
// elementas, jei elementų yra lyginis skaičius, pvz 8, tai vidurinė reikšmė bus 4-os ir 5-os reikšmės 
// aritmetinis vidurkis

let array30 = [];
let average = [];
let middle = [];
let average_is_bigger = [];

for(let i = 0; i < 100; i++){
    let array301 = [];
    for(let j = 0; j < 10; j++){
        array301[j] = randomSkaicius(1, 17);
    }
    array30[i] = array301;
}
console.log(array30);

for(let i = 0; i < 100; i++){
    average[i] = 0;
    for(let j = 0; j < 10; j++){
        average[i] += array30[i][j];
    }
    average[i] = average[i] / 10;
}
console.log(average);

for(let i = 0; i < 100; i++){
    middle[i] = 0;
    middle[i] = (array30[i][4] + array30[i][5]) / 2;
}
console.log(middle);

for(let i = 0; i < 100; i++){
    if(average[i] > middle[i]){
        average_is_bigger[i] = true;
    } else average_is_bigger[i] = false;
}
console.log(average_is_bigger);