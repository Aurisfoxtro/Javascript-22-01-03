// 1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? 
// Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: 
// Skaičius geras.



// 2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, 
// kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-
// geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.



// 3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas 
// į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar 
// Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: 
// Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai 
// d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes;



// 4. Skaičius skaitomas skaitmenimis iš abiejų galų vienodai vadinamas polindromu. Pvz.: 
// 121. Žinomas 4-klis natūralus skaičius n. Nustatykite ar skaičius yra polindromas. 
// Pasitikrinkite: Kai n = 1221 , turėtume gauti: Skaičius polindromas; kai n=1223 tada 
// Skaičius nepolindromas

let po = 1221;

let po1 = po % 10; 
let po2 = Math.floor(po / 10) % 10;
let po3 = Math.floor(po / 100) % 10;
let po4 = Math.floor(po / 1000);

if(po1 == po4 && po2 == po3) console.log('Skaičius ' + po + ' yra polindromas.');
else console.log('Skaičius ' + po + ' nėra polindromas.');

// 5. Loterijos bilietą sudaro šešiaženklis numeris. Loterijoje laimi tas bilietas, kurio numerio 
// skaitmenų suma dalosi iš 4. Nustatykite, ar loterijos bilietas n yra laimingas?. 
// Pasitikrinkite: Kai n = 222442, turėtume gauti: Bilietas laimingas

let bil = 222442;

let bil1 = bil % 10; 
let bil2 = Math.floor(bil / 10) % 10
let bil3 = Math.floor(bil / 100) % 10
let bil4 = Math.floor(bil / 1000) % 10
let bil5 = Math.floor(bil / 10000) % 10
let bil6 = Math.floor(bil / 100000)

// console.log(bil1);
// console.log(bil2);
// console.log(bil3);
// console.log(bil4);
// console.log(bil5);
// console.log(bil6);

if((bil1 + bil2 + bil3 + bil4 + bil5 + bil6) % 4 == 0) console.log(bil + ' bilietas laimingas.')
else console.log(bil + ' bilietas nelaimingas.')

// 6. Keliamieji metai turi 366 dienas, o paprastieji 365. Visi metai, išskyrus šimtmečius, yra 
// keliamieji, jei dalūs iš 4. Pasakykite, ar metai m yra keliamieji ar paprastieji? 
// Pasitikrinkite: Kai m = 2004, turi būti spausdinama: Metai keliamieji.



// 7. Skaičius skaitomas skaitmenimis iš abiejų galų vienodai vadinamas polindromu. Pvz.: 
// 121. Žinomas 5-klis natūralus skaičius n. Nustatykite ar skaičius yra polindromas. 
// Pasitikrinkite: Kai n = 12321 , turėtume gauti: Skaičius polindromas; kai n=12423 tada 
// Skaičius nepolindromas

let pol = 12321;

let pol1 = pol % 10;
let pol2 = Math.floor(pol / 10) % 10;
let pol3 = Math.floor(pol / 100) % 10;
let pol4 = Math.floor(pol / 1000) % 10;
let pol5 = Math.floor(pol / 10000);

if(pol1 == pol5 && pol2 == pol4) console.log('Skaičius ' + pol + ' yra polindromas.');
else console.log('Skaičius ' + pol + ' nėra polindromas.');

// 8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 
// arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri 
// įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba 
// „Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys 
// jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.

let kau = 1;

if(kau == 1 || kau == 3 || kau == 5) console.log('Kambarį tvarkys jaunėlis.')
else console.log ('Kambarį tvarkys vyresnėlis.')

// 9. Žinomi trijų klasės draugų kontrolinio darbo pažymiai. Sudarykite programą, kuri 
// nustatytų, kuris mokinys gavo geriausią pažymį, kai žinome jų pažymius p1, p2, p3 
// Pasitikrinkite: Jei p1=5, p2=8, p3=9 ekrane turi būti: Trečias gavo geriausią pažymį.

let p1 = 5;
let p2 = 8;
let p3 = 9;

if (p1 > p2 && p1 > p3) console.log('Pirmas mokinys gavo geriausią pažymį.')
else if(p2 > p1 && p2 > p3) console.log('Antras mokinys gavo geriausią pažymį.')
else console.log('Trečias mokinys gavo geriausią pažymį.')

// 10. Parašykite programą, kuri įvedus mėnesio numerį n atspausdintų to mėnesio dienų kiekį 
// d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)

let n = 5;

if(n == 1 || n ==3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12)
    console.log('Mėnesis turi 31 d.');
else if (n == 2) console.log('Mėnesis turi 28 d.')
else console.log('Mėnesis turi 30 d.')

// 11. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro 
// kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie 
// tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: 
// jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, 
// m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos

let v;
let m;
let v1;
let m1;
let m2;

if((v1*60 + m1 + m2) > (v*60 + m)) console.log('Petras pavėlavo į pamoką.')
else console.log('Petras suspėjo į pamoką.')

// 12. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti 
// lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti 
// negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti:
// Trikampį sudėlioti negalima.

let nn = 6;

if ((nn%3) == 0 && nn != 0) console.log('Trikampį sudėlioti galima.');
else console.log('Trikampį sudėlioti negalima.')

// 13. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri 
// metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms 
// skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių 
// žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. 
// Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti 
// spausdinama: Metai neolimpiniai.

const olimpiniai = 1896;
let metai = 1900;
let nnn;

if (metai % 4 == 0){
    nnn = (metai - olimpiniai) / 4 + 1
    console.log('Olimpiniai metai. Žaidynių nr. ' + nnn);
} else console.log('Metai ne olimpiniai.');

// 14. Žinomi kvadratinės lygties ax2 +bx+c=0 koeficientai a, b, c. Parašykite programą, kuri 
// rastų lygties sprendinius. Pasitikrinkite:a=1, b=2, c=1, kompiuterio ekrane turi būti 
// rodomas rezultatas: vienas sprendinys 1.00 a=1, b=4, c=3, kompiuterio ekrane turi būti 
// rodomas rezultatas: du sprendiniai 3.00 1.00 a=1, b=3, c=4, kompiuterio ekrane turi būti 
// rodomas rezultatas: nėra sprendinių

let a = 1;
let b = 2;
let c = 1;

let x;
let x1;
let x2;
let d;

d = (b ** 2) - (4*a*c);

if (d < 0){
    console.log('Sprendinių nėra.')
}else if (d ==0){
    x = -b/(2*a);
    console.log('x = ' + x);
}else{
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a)
    console.log ('x1 = ' + x1 + ', x2 = ' + x2);
}

// 15. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų 
// kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius 
// ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 
// porcijas, liks centų 10

let ce = 50;
let p = 20;
let mm;
let nnnn = 0;

nnnn = Math.floor(ce / p);
mm = ce % p;

console.log('Saulius nusipirks ' + nnnn + ' porcijų ledų ir jam liks ' + mm + ' centų.')

// 16. Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną telpa m dėžių 
// prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, kiek kartų 
// k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę. 
// Pasitikrinkite: jei n = 100, m = 14, tai k = 8.

let ni = 100;
let ma = 14;
let k;

k = Math.ceil(ni/ma);

console.log(ni + ' dėžių, jei į mašiną telpa ' + ma + ' dėžių, perveš per ' + k + ' kartus.');

// 17. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu 
// vienetu, o mažesnį padidintu vienetu.

let aa = 11;
let bb = 16;

if (aa > bb){
    aa--;
    bb++;
}else if (bb > aa){
    bb--;
    aa++;
}else ;

console.log('a = ' + aa + ', b = ' + bb);