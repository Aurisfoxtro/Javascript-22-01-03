import Kibiras1 from "./classes/Kibiras1.js";
import Pinigine from "./classes/Pinigine.js";
import Troleibusas from "./classes/Troleibusas.js";
import PirkiniuKrepselis from "./classes/PirkiniuKrepselis.js";

// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis kuri lygi
// 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni()
// pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolękiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti
// akmenų rinkimą į kibirą ir rezultatų išvedimą.

const kibiras = new Kibiras1;

kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(4);
kibiras.kiekPririnktaAkmenu();

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes
// popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis),
// kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie
// metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite
// metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę
// popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir
// pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės
// monetos egzistuoja realiame pasaulyje.

const pinigine = new Pinigine;

pinigine.ideti(2);
pinigine.ideti(10);
pinigine.skaiciuoti();

// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius
// kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir
// islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į
// konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį,
// kad troleibusu važiuoti neigiamas keleivių skaičius negali.

const troleibusas1 = new Troleibusas;

troleibusas1.ilipa(15);
troleibusas1.islipa(5);
troleibusas1.vaziuoja();

// 4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris
// rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram
// kelevių skaičiaus skaičiavimui sukurkite statinį metodą
// bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų
// keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras
// keleivių skaičius). Taip pat atitinkamai modifikuokite metodus
// ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

const troleibusas2 = new Troleibusas;

troleibusas2.ilipa(20);
troleibusas2.islipa(10);
troleibusas2.vaziuoja();

Troleibusas.bendrasKeleiviuSkaicius(10);
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

// 5. (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę
// turinys, kuri yra Map tipo objektas. Sukurti tris metodus:
// idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti
// metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą
// (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus,
// tokiu atveju produktų kiekis turėtų sumuotis

const krepselis = new PirkiniuKrepselis;

krepselis.idetiSureli(2);
krepselis.idetiPieno(1);
krepselis.idetiDuonos(1);
krepselis.idetiSureli(3);
krepselis.krepselioTurinys();

// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek
// piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris
// skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių
// pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo
// kvietimą) laikykite vienu banknotu ar viena moneta.



// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą
// akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose
// pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti
// akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą
// bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės
// savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų
// skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),
// pridetiDaugAkmenu(kiekis).



// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti
// pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris
// keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekiskiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną
// kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.
// Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje
// yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią
// pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.



// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai
// konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri
// pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos
// konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo
// savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true
// arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y.
// Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi
// objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys
// nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

