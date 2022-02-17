function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1. Parašyti skriptą, kuris naudojant for ciklą atspausdintų 11 skaitmenų nuo 100 iki 200 kas 10 (t.y. 100, 110, 120… 180, 190, 200);

for(let i = 100; i <= 200; i += 10){
    console.log(i);
}
//2. Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15. Sugeneruotus skaičius cikle spausdinti. Ciklui pasibaigus išspausdinti cikle sugeneruotų dviženklių skaičių kiekį;

let count = 0;
let number;

for(let i = 0; i < 10; i++){
    number = rand(5,15);
    console.log(number);
    if (number > 9){
        count++;
    }
}
console.log('Cikle sugeneruota', count, 'dviženklių skaičių.');
//3. Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15. Sugeneruotus skaičius cikle spausdinti. Ciklui pasibaigus išspausdinti cikle sugeneruotų skaičių vidurkį

let sum = 0;
let average = 0;

for(let i = 0; i < 10; i++){
    number = rand(5,15);
    console.log(number);
    sum += number; 
}
average = sum / 10;
console.log('vidurkis:', average);

//4. Cikle do while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 50. Ciklą užbaigti, kai bus sugeneruotas skaičius 13 arba 33 arba 43. Ciklui pasibaigus išspausdinti iteracijų (kiek kartų ciklas prasisuko) kiekį

count = 0;

do{
    number = rand(10,50);
    count++;
}while(number != 13 && number != 33 && number != 43);

console.log('Ciklas prasisuko', count, 'kartus.');
//5. Cikle while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 20. Ciklą užbaigti, kai bus tris kartus (trečią, ne pirmą kartą) sugeneruotas skaičius 17. Ciklui pasibaigus išspausdinti iteracijų (kiek kartų ciklas prasisuko) kiekį.

count = 0;
let count_end = 0;

while(count_end != 3){
    number = rand(10, 20);
    count++;
    if(number == 17){
        count_end++;
    }
}
console.log('Ciklas prasisuko', count, 'kartus.');

//---------------MASYVAI-------------------------------------------------
console.log('-----------------MASYVAI----------------------');
//1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
console.log('---------------------1------------------------');

let wallet = [];
let length = rand(10,30);

for(let i = 0; i < length; i++){
    wallet[i] = rand(0, 10);
}
console.log(wallet);
//2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
console.log('---------------------2------------------------');

sum = 0;

for(let i = 0; i < length; i++){
    sum += wallet[i];
}
console.log('Piniginėje yra', sum, 'pinigų.');

//3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log('---------------------3------------------------');

sum = 0;

for(let i = 0; i < length; i++){
    if(wallet[i] > 2){
        sum += wallet[i];
    }
}
console.log('Piniginėje yra', sum, 'pinigų suma, didesnių už 2.');

//4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log('---------------------4------------------------');

for(let i = 0; i < length; i++){
    if(wallet[i] <= 2){
        wallet[i] = 0;
    }
}
console.log(wallet);

//5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
console.log('---------------------5------------------------');

let max = 0;
count = 0;

for(let i = 0; i < length; i++){
    if(wallet[i] > max){
        max = wallet[i];
    }
}
for(let i = 0; i < length; i++){
    if(wallet[i] == max){
        count++;
    }
}
console.log('Max:', max, ', jų masyve yra',count);

//6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
console.log('---------------------6------------------------');

for(let i = 0; i < length; i++){
    if(wallet[i] == 0){
        wallet[i] = i;
    }
}
console.log(wallet);

//7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
console.log('---------------------7------------------------');

if(length < 30){
    for(let i = length; i < 30; i++){
        wallet[i] = rand(0, 10);
    }
}
console.log(wallet);

//8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log('---------------------8------------------------');

let wallet_coins = [];
let wallet_notes = [];

for(let i = 0; i < length; i++){
    if(wallet[i] > 2){
        wallet_notes.push(wallet[i]);
    }else{
        wallet_coins.push(wallet[i]);
    }
}
console.log(wallet_notes);
console.log(wallet_coins);

//9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
console.log('---------------------9------------------------');

let wallet2 = [];

wallet2[0] = wallet_coins;
wallet2[1] = wallet_notes;

console.log(wallet2);

//10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
console.log('--------------------10------------------------');

wallet2[2] = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū','Lietuvos Geležinkeliai', 'Mano RIMI']; 

console.log(wallet2);

//11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
console.log('--------------------11------------------------');

wallet2[2].sort();

console.log(wallet2);

//12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
console.log('--------------------12------------------------');

let begin = wallet2[2].length;

for(let i = begin; i < 20; i++){
    if(rand(0,1) == 0){
        wallet2[2].push('MasterCard');
    }else{
        wallet2[2].push('Visa');
    }
}
console.log(wallet2);

//13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
console.log('--------------------13------------------------');

let count_visa = 0;
let count_mastercard = 0;

for(let i = 0; i < 20; i++){
    if(wallet2[2][i] == 'MasterCard'){
        count_mastercard++;
    }else if(wallet2[2][i] == 'Visa'){
        count_visa++;
    }
}
if(count_mastercard > count_visa){
    console.log('Mastercard kortelių daugiau.')
}else if (count_visa > count_mastercard){
    console.log('Visa kortelių daugiau.')
}else {
    console.log('Visa ir MasterCard kortelių po lygiai.')
}
//14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1.000.000.000 iki 9.999.999.999;
console.log('--------------------14------------------------');

wallet2[3] = [12,14];

for(let i = 0; i < 10; i++){
    wallet2[3][i] = rand(1000000000,9999999999);
}
console.log(wallet2);

//15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
console.log('--------------------15------------------------');

wallet2[3].sort(function(a,b) {return a-b});

console.log(wallet2);

//16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
console.log('--------------------16------------------------');



//17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
console.log('--------------------17------------------------');



//18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
console.log('--------------------18------------------------');


