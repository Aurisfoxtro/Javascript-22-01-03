// 1. naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for(let i = 0; i < 5; i++){
    console.log('Labas');
}
console.log('-----------------------');
// 2. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje 
//     eilutėje);

for(let i = 0; i < 5; i++){
    console.log(i);
}
console.log('-----------------------');
// 3. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius 
//     vienoje eilutėje);

for(let i = 0; i < 5; i++){
    console.log(i*10);
}
console.log('-----------------------');
// 4. naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius 
//     vienoje eilutėje);

for(let i = 0; i < 5; i++){
    console.log(49 + i);
}
console.log('-----------------------');
// 5. naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje 
//     eilutėje);

for(i = 4; i >= 0; i--){
    console.log(i);
}
console.log('-----------------------');
// 6. naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje);

function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

for(let i = 0; i < 5; i++){
    console.log(randomSkaicius(0,10));
}
console.log('-----------------------');
// 7. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
//     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let skaicius;

while(skaicius != 5){
    skaicius = randomSkaicius(0,10);
    console.log(skaicius);
}

console.log('-----------------------');
// 8. naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius 
//     vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

let sum = 0;
let sk;

while(sum <= 100){
    sk = randomSkaicius(0,10);
    console.log(sk);
    sum += sk;
}
console.log('Suma: ' + sum)
console.log('-----------------------');
//     9. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
//     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek 
//     ciklų prasisuko;

let ciklai = 0;
let skaic = 0;

while ((skaic != 5) && (skaic != 7)){
    skaic = randomSkaicius(0,10);
    console.log(skaic);
    ciklai++;
}
console.log('Prasisuko ' + ciklai + ' ciklai.')
console.log('-----------------------');
//     10. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n 
//     centimetrus coliais ir atvirkščiai.

let mat = 10;
let mat_c;

for(let i = 1; i <= mat; i++){
    mat_c = i/2.54;
    console.log(i + ' cm yra ' + mat_c + ' colio.')
}
for(let i = 1; i <=mat; i++){
    mat_c = i* 2.54;
    console.log(i + ' coliai yra ' + mat_c + ' cm.')
}
console.log('-----------------------');
//     11. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
//     kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, 
//     indėlį.

let indelis = 100;
let palukanu_norma = 0.02;
let palukanos;
let metu = 10;

for(let i = 1; i <= metu; i++){
    palukanos = indelis * palukanu_norma;
    indelis = indelis + palukanos;

console.log(i + ' metų ataskaita. Šių metų palūkanos ' + palukanos.toFixed(2) + ' Eur. Indėlis ' + indelis.toFixed(2) + ' Eur.' );
}
console.log('-----------------------');
//     12. . Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei 
//     tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už 
//     duotąjį, raskite tą skaičių.

let pradinis_sk;
let desimtys;
let vienetai;

for(i = 10; i < 100; i++){
    vienetai = i % 10;
    desimtys = Math.floor(i / 10);
    if((desimtys == vienetai * 3) && (vienetai * 10 + desimtys + 36) == i){
        console.log('Skaičius yra ' + i);
    }
}

console.log('-----------------------');
//     13. Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina 
//     iš 998 ?

let pradzia = 2000;
let pabaiga = 8999;

for(let i = 2000; i < 9000; i++){
    if (((Math.floor(i / 1000) % 2) == 0) && (i % 998) != 0) console.log(i);
}
console.log('-----------------------');
//     14. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra 
//     keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 
//     metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros 
//     keliamuosius metus.

for (let i = 1; i < 2022; i++){
    if (((i % 4) == 0 && (i % 100) != 0)||(i % 400) == 0) console.log(i);
}
console.log('-----------------------');
//     15. Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės 
//     tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus 
//     pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą, 
//     spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti 
//     nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie 
//     bilietų numeriai: 998 1002

let bil_pr = 997;
let bil_pab = 1003;

for (let i = bil_pr; i <= bil_pab; i++){
    if((i % 2) == 0 && (i % 10) != 0) console.log(i);
}
console.log('-----------------------');
//     16. Duotas natūralus skaičius n. Raskite pirmą skaitmenį

let naturalus = 7254;
let darbinis = naturalus;
let pirmas_sk;

while(darbinis != 0){
    pirmas_sk = darbinis;
    darbinis = Math.floor(darbinis / 10);
}
console.log('Pirmas skaičus: ' + pirmas_sk);
console.log('-----------------------');
//     17. Duotas natūralusis skaičius n. Raskite skaitmenų sumą.

const natur = 6524;
let darb = natur;
let suma = 0;

while(darb != 0){
    suma += darb % 10; 
    darb = Math.floor(darb / 10);
}
console.log('Natūraliojo skaičiaus ' + natur + ' skaitmenų suma: ' + suma);
console.log('-----------------------');
//     18. Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321

    const nat = 64087;
    let dar = nat;
    let naujas = '';
    naujas += (nat % 10).toString();

    while(dar != 0){
            if(Math.floor(dar/10) != 0){
            naujas += (Math.floor(dar/10) % 10).toString();
        }
        dar = Math.floor(dar/10);
    }
    console.log(' Skaičiaus ' + nat + ' atvirkštinis skaičius yra ' + naujas);
    console.log('-----------------------');

//     let darb= 5486;
// let suma1=0

// while(darb != 0) {
//     suma1 += darb % 10;
//     darb = Math.floor(darb/ 10)
// }
// console.log(Skaitmenų suma bus ${suma1}) 

//------------------------------------------------

// const skaiciai = 54087;
// let work = skaiciai
// let naujas = 0

// while(work != 0) {
//     naujas = naujas* 10 + work % 10
//     work = Math.floor(work/ 10)
// }
// console.log(Originalus skaičius yra ${skaiciai} atvirkšinis skaičius būtų ${naujas})


// 19. Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią 
// skaitmenį.

    const na = 25074;
    let da = na;
    let max = 0;
    let min = 9;
    let skait = na % 10;

    if(skait > max) max = skait;
    if (skait < min) min = skait;

    while(da != 0){
        if (Math.floor(da / 10) != 0){
        skait = Math.floor(da / 10) % 10;
        }  
        if (skait > max) max = skait; 
        if (skait < min) min = skait;
        da = Math.floor(da/10);
    }
console.log('Skaičiaus ' + na + ' skaitmenų Max: ' + max + ', Min: ' + min);
console.log('-----------------------');

// const uzdav = 25476;
// let working= uzdav;
// let naujasMax= 0;
// let naujasMin = 9;

// while(working != 0) {
//     let robotas = working % 10
//     if(robotas > naujasMax) {
//         naujasMax = robotas
//     }
//     if(robotas < naujasMin) {
//         naujasMin = robotas
//     }
//  working= Math.floor(working/10);
// }
// console.log(naujasMax)
// console.log(naujasMin)
// 20. Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą, 
// kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000.

let p_n = 0.05;
let ind = 100;
let met = 0;

while (ind <= 100000){
    ind = ind + ind * p_n;
    met++;
}
console.log('100 Eur indėlis su metine palūkanų norma ' + p_n + ' viršys 100.000 Eur po ' + met + ' metų.');
console.log('-----------------------');
// 21. Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo. Parašykite 
// programą, kuri apskaičiuotų:
// a. Kiek žiedų buvo po n dienų
// b. Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų.

let ziedai = 1;
let dienos = 5;

for(let i = 1; i <= dienos; i++){
    ziedai = ziedai * 2;
}
console.log('Po ' + dienos + ' dienų buvo ' + ziedai + ' žiedų.')

let m = 100;
ziedai = 1;
dienos = 0;

while(ziedai<= m/2){
    ziedai = ziedai * 2;
    dienos++;
}
console.log('Jei ežere telpa ' + m + ' žiedų, tai lelijos pusę ežero užklos per ' + dienos + ' dienas.')
console.log('-----------------------');
// 22. Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių 
// daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t. Parašykite 
// programą, skaičiuojančią, kiek dienų d dirbs sodininkas, kol išgenės n sode augančių 
// medžių. Paskutinei dienai gali likti mažiau medžių. Visi duomenys yra sveikojo tipo. 
// Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet kompiuterio ekrane turi būti rodoma: 
// Sodininkas dirbs 4 dienas.

const viso_me = 16;
let medziai = 3;
let daugiau = 1;
let viso_m = viso_me;
let dienu = 0;

while(viso_m > 0){
    viso_m -= medziai;
    medziai += daugiau;
    dienu++;
}

console.log('Sode buvo ' + viso_me + ' medžių. Sodininkas dirbo ' + dienu + ' dienas.');