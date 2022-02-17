function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Reikia padaryt masyvą iš 10 elementų, kurio elementai yra rand skaičiai nuo 0 iki 7 DONE!

let array = [];

for(let i = 0; i < 10; i++){
    array[i] = rand(0,7);
}
console.log(array);
console.log('------------------------------------------');

// Atspausdinti masyvo reikšmes stulpeliu, bet tik tas kurios didesnės už 3 DONE!

for(let i = 0; i < array.length; i++){
    if(array[i] > 3){
        console.log(array[i]);
    }
}
console.log('------------------------------------------');

// Paskaičiuoti masyvo elementų sumą DONE!

let sum = 0;

for(i = 0; i < array.length; i++){
    sum += array[i];
}
console.log('Suma:', sum);
console.log('------------------------------------------');

// Reikia surasti mažiausią elementą masyve DONE!

let min = array[0];

for(i = 1; i < array.length; i++){
    if(array[i] < min){
        min = array[i];
    }
}
console.log('Min:', min);
console.log('------------------------------------------');

// Paskaičiuoti kiek porinių/lyginių reikšmių yra masyve DONE!

let count = 0;

for(i = 0; i < array.length; i++){
    if((array[i] % 2) == 0 /*&& array[i] != 0*/){
        count++;
    }
}
console.log('Lyginių skaičių yra', count);
console.log('------------------------------------------');

let one = ['Nausėda', 'Antanas', 'Petras'];
let two = ['Linas', 'Birutė', 'Bebras'];
let three = ['Tomas', 'Sima', 'Saulius'];

let bigHouse = [];

bigHouse.push(one);
bigHouse.push(two);
bigHouse.push(three);

// atspausdinti bigHouse gyventojų sąrašą DONE!

for( let i = 0; i < bigHouse.length; i++){
    for(let j = 0; j < bigHouse[i].length; j++){
        console.log(bigHouse[i][j]);    
    }
}
console.log('------------------------------------------');

// Kur gyvena tomas? DONE!

let floor;
let flat;

for( let i = 0; i < bigHouse.length; i++){
    for(let j = 0; j < bigHouse[i].length; j++){
        if(bigHouse[i][j] == 'Tomas'){
            floor = i;
            flat = j;
        }    
    }
}
console.log('Tomas gyvena',floor,'aukšte,', flat, 'bute.')
console.log('------------------------------------------');