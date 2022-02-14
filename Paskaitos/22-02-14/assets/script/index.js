function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
console.log('--------------1----------------');

let result = '';

for(i = 10; i > 0; i--){
    result += i + ' ';
    // console.log(i);
}
// result += ' DONE!';
console.log(result);
console.log('--------------2----------------');

const animal = 'Begemotas';

for(let i = 0; i < animal.length; i++){
    console.log(animal.charAt(i));
}
console.log('--------------3----------------');

result = '';
for(i = 0; i < 100; i++){
    result += animal + ' ';
}
console.log(result);

console.log('--------------4----------------');

let sum = 0;

for(let i = 0; i < 10; i++){
    sum += randomSkaicius(1,6); 
}
console.log('Kauliuko akių suma po 10 metimų: ' + sum);
console.log('--------------5----------------');

let sum2 = 0;
let quantity = 0;

for(let i = 0; i < 10; i++){
    if(sum2 > 20){
        break;
    }else{
        sum2 += randomSkaicius(1,6);
        quantity++;
    }
}
console.log('Kauliuko akių suma: ' + sum2 + '  pasiekta po ' + quantity + ' metimų.');
console.log('--------------6----------------');

let counter = 0;

for(let i = 0; i < 10; i++){
    let metimas = randomSkaicius(1,6);
    console.log(metimas);
    if (metimas > 4){
        counter++;
    }
}
console.log('Per 10 metimų, virš 4 akių iškrito ' + counter + ' kartus.');
console.log('--------------7----------------');

let counter3 = 0;
let counter5 = 0;

for(let i = 0; i < 10; i++){
    let metimas = randomSkaicius(1,6);
    console.log(metimas);
    if (metimas == 3){
        counter3++;
    }
    if(metimas == 5){
        counter5++;
    }
}
console.log('Per 10 metimų, 3 iškrito ' + counter3 + ' kartus, o 5 iškrito ' + counter5 + ' kartus.');

//2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
console.log('---------------ND 2----------------------------');

let number;
number = randomSkaicius(5,10);
console.log('Skaičius:', number);

//3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
console.log('---------------ND 3----------------------------');

let greet = 'Labas';
for(let i = 0; i < 5; i++){
    console.log(greet);
}
//4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
console.log('---------------ND 4----------------------------');

for(let i = 0; i < 7; i++){
    console.log(number);
}

//5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
console.log('---------------ND 5----------------------------');

for(let i = 0; i < number; i++){
    console.log(number);
}
//6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
console.log('---------------ND 6----------------------------');

if (number > 7){
    for(let i = 0; i < number; i++){
        console.log(number);
    }
}else {
    console.log('Skaičius mažesnis už 7.');
}
//7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
console.log('---------------ND 7----------------------------');

let number7;

for(let i = 0; i < 5; i++){
    number7 = randomSkaicius(10,20);
}

//A) Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
console.log('---------------ND 7 A----------------------------');

for(let i = 0; i < 5; i++){
    number7 = randomSkaicius(10,20);
    console.log(number7);
}
//B) Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('---------------ND 7 B----------------------------');
let sum7 = 0

for(let i = 0; i < 5; i++){
    number7 = randomSkaicius(10,20);
    sum7 += number7;
}
console.log('Suma:',sum7);

//C) Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
console.log('---------------ND 7 C----------------------------');

let line = '';

for(let i = 0; i < 5; i++){
    number7 = randomSkaicius(10,20);
    line += number7 + ' ';
}
console.log(line);

//D) Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
console.log('---------------ND 7 D----------------------------');

line = '';
sum7 = 0;

for(let i = 0; i < 5; i++){
    number7 = randomSkaicius(10,20);
    line += number7 + ' ';
    sum7 += number7;     
}
line += 'Suma: ' + sum7;
console.log(line);