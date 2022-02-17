let siunta = 'S';

console.log('Siunčiam ', siunta);

if (siunta == 'S'){
    console.log('Telpa S');
}
if (siunta == 'S' || siunta == 'M'){
    console.log('Telpa M');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L'){
    console.log('Telpa L');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L' || siunta == 'XL'){
    console.log('Telpa XL');
}
console.log('------------------------------------------');
// alternatyviai galima naudoti switch cikla

switch(siunta){
    case 'S': 
        console.log('Telpa S');
    case 'M': 
        console.log('Telpa M');
    case 'L': 
        console.log('Telpa L');
    default: 
        console.log('Telpa XL');
}
console.log('------------------------------------------');
//Modifikuotas switch su break, placiai naudojamas if pakaitalas

let light = 'green';

//console.log('light', light);

if (light == 'green'){
    console.log('Go');
}else if (light == 'yellow'){
    console.log('Ready');
}else{
    console.log('Wait');
}

switch(light){
    case 'green': 
        console.log('Go');
        break;
    case 'yellow':
        console.log('Ready');
        break;
    default: 
        console.log('Wait');
}
console.log('------------------------------------------');
//----------------------------------------------------
// Ridenam kauliuką (rand 1-6). Jeigu išsiridena 1 arba 5, perku ledų, jeigu 2 arba 4 perku čipsų, jeigu 3 arba 6 perku pieno. Ką perkat DONE!

function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

let dice = randomSkaicius(1,6);

console.log('Iškrito:', dice);

switch(dice){
    case 1:
        console.log('Perku ledų.');
        break;
    case 2:
        console.log('Perku čipsų.');
        break;
    case 3:
        console.log('Perku pieno.');
        break;
    case 4:
        console.log('Perku čipsų.');
        break;
    case 5:
        console.log('Perku ledų.');
        break;
    default:
        console.log('Perku pieno.');
}
console.log('------------------------------------------');
//-----------------------------------------------------
// destytojo sprendimas:
switch(dice){
    case 1:
    case 5:
        console.log('Ledai');
        break;
    case 2:
    case 4:
        console.log('Čipsai');
        break;
    default:
        console.log('Pienas');
}
console.log('------------------------------------------');
//------------------------------------------------------

// do while ciklas. Metom kauliuką tol kol iškrenta 5. Suskaičiuojam kiek kartų mėtėm DONE!

let counter = 0;
let saugiklis = 0; //TIP 2 apsauga nuo amžino ciklo.

do {
    if (saugiklis++ > 100) break;
    dice = randomSkaicius(1,6);
    console.log('Iškrito:', dice);
    counter++;
}while(dice != 5);

console.log('Kauliuką metėm', counter, 'kartus.');
console.log('------------------------------------------');

//TIP 1 logikos inversija, pradzioj sugalvojam teigini, po to pagal taisykle verciam i neigini.

// == --> !=
// != --> ==
// > --> <=
// <= --> >
// < --> >=
// >= --> <
// || --> &&
// && --> ||

// do while ciklas. Metom kauliuką tol kol iškrenta 5 arba 1. Suskaičiuojam kiek kartų mėtėm DONE!

counter = 0;

do {
    dice = randomSkaicius(1,6);
    console.log('Iškrito:', dice);
    counter++;
}while(dice != 5 && dice != 1);

console.log('Kauliuką metėm', counter, 'kartus.');
console.log('------------------------------------------');

// do while ciklas. Metom kauliuką. Sustojam kai išmestų kauliukų suma tampa didesnė nei 33. Suskaičiuojam kiek kartų mėtėm DONE!

let sum = 0;
counter = 0;

do {
    dice = randomSkaicius(1,6);
    console.log('Iškrito:', dice);
    counter++;
    sum += dice;
}while(sum <= 33);

console.log('Kauliuką metėm', counter, 'kartus. Suma:', sum);
console.log('------------------------------------------');

// Yra 1000 litrų vandens. Karvių banda per parą išgeria atsitiktinį kiekį nuo 70 iki 200 litrų. Paskaičiuoti per kiek dienų karvės išgeria vandenį. DONE!

let vanduo = 1000;
let dienos = 0;

while(vanduo > 0){
    let isgere = randomSkaicius(70,200);
    console.log(isgere);
    vanduo -= isgere;
    dienos++;
}
console.log('Karvės išgėrė vandenį per', dienos, 'dienų.');

//8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
console.log('-------------------------ND 8---------------------------');

let dice8;

do{
    dice8 = randomSkaicius(10,25);
    // console.log(dice8);

}while(dice8 >= 12);
console.log (dice8);

//A) Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
console.log('-------------------------ND 8 A-------------------------');

do{
    dice8 = randomSkaicius(10,25);
    console.log(dice8);

}while(dice8 >= 12);

//B) Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
console.log('-------------------------ND 8 B-------------------------');

let count8 = 0;

do{
    dice8 = randomSkaicius(10,25);
    console.log(dice8);
    count8++;

}while(dice8 >= 12);
console.log('Viso iteracijų:', count8);

//C) Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('-------------------------ND 8 C-------------------------');

let sum8 = 0;

do{
    dice8 = randomSkaicius(10,25);
    console.log(dice8);
    if(dice8 <= 18){
        sum8 += dice8;
    }
}while(dice8 >=12);
console.log('Mažesnių nei 18 reikšmių suma:',sum8);

//D) Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('-------------------------ND 8 D-------------------------');

sum8 = 0;
let droped = 0;

do{
    dice8 = randomSkaicius(10,25);
    console.log(dice8);
    if(dice8 <= 18){
        sum8 += dice8;
    }else{
        droped++;
    }
}while(dice8 >=12);
console.log('Mažesnių nei 18 reikšmių suma:',sum8, ', atmesta:', droped);

//E) Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
console.log('-------------------------ND 8 E-------------------------');

let odd_count = 0;
let even_count = 0;

do{
    dice8 = randomSkaicius(10,25);
    console.log(dice8);
    if((dice8 % 2) == 0){
        even_count++;
    }else{
        odd_count++;
    }
}while (dice8 >=12);
console.log('Sugeneruota lyginių:', even_count,', nelyginių:', odd_count);

//F) Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
console.log('-------------------------ND 8 F-------------------------');

count8 = 0;

do{
    dice8 = randomSkaicius(10,25);
    console.log(dice8);
    for(let i = 0; i <= 20; i++){
        count8++;
    }

}while(dice8 >= 12);
console.log('Viso iteracijų:', count8);

//9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
console.log('-------------------------ND 9---------------------------');

let number9;

do{
    number9 = randomSkaicius(5,10);
    console.log(number9);

}while(number9 != 5);

//A) Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
console.log('-------------------------ND 9 A-------------------------');

let out_count = 0;
let in_count = 0;

do{
    number9 = randomSkaicius(5,10);
    console.log(number9);
    out_count++;
    for(let i = 0; i < number9; i++){
        in_count++;
    }

}while(number9 != 5);
console.log('Viso iteracijų išorinių:', out_count, ', vidinių: ', in_count);

//B) Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
console.log('-------------------------ND 9 B-------------------------');

out_count = 0;
in_count = 0;
let count_5 = 0;

do{
    number9 = randomSkaicius(5,10);
    if (number9 == 5){
        count_5++;
    }
    console.log(number9);
    out_count++;
    for(let i = 0; i < number9; i++){
        in_count++;
    }

}while(count_5 != 3);
console.log('Viso iteracijų išorinių:', out_count, ', vidinių: ', in_count);

//C) Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
console.log('-------------------------ND 8 C-------------------------');

out_count = 0;
in_count = 0;
count_5 = 0;

do{
    number9 = randomSkaicius(5,10);
    if (number9 == 5){
        count_5++;
    }else{
        count_5 = 0;
    }
    console.log(number9);
    out_count++;
    for(let i = 0; i < number9; i++){
        in_count++;
    }

}while(count_5 != 3);
console.log('Viso iteracijų išorinių:', out_count, ', vidinių: ', in_count);

//10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.
console.log('-------------------------ND 10--------------------------');

let kazys_n;
let petras_n;
let kazys_sum = 0;
let petras_sum = 0;

do{
    kazys_n = randomSkaicius(5,25);
    console.log('Kazys surinko:', kazys_n);
    petras_n = randomSkaicius(10,20);
    console.log('Petras surinko:', petras_n);
    if (kazys_n > petras_n){
        console.log('Partiją laimėjo: Kazys.');
    }else if(petras_n > kazys_n){
        console.log('Partiją laimėjo: Petras.');
    }else {
        console.log('Lygiosios.')
    }
    kazys_sum += kazys_n;
    petras_sum += petras_n;

}while(kazys_sum < 222 && petras_sum < 222);

if (kazys_sum > petras_sum){
    console.log ('Žaidimą laimėjo Kazys.');
}else if (petras_sum > kazys_sum){
    console.log('Žaidimą laimėjo Petras.');
}else{
    console.log('Žaidimas baigėsi lygiosiomis.')
}