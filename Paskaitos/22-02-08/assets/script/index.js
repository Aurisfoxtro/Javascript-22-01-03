function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

//----------------------------------------------------------------

let array = [];

for(let i = 0; i < 30; i++){
    array[i] = randomSkaicius(5,25); 
}
console.log(array);

//------------------------A-----------------------------------------

let sum_11 = 0;

for(let i = 0; i <30; i++){
    if (array[i]>10) sum_11++;
}

console.log('Masyve reikšmių didesnių už 10 yra: ' + sum_11);

//-------------------------B-----------------------------------------

let max = 0;
let index = [];

for(let i = 0; i < 30; i++){
    if(array[i] > max)
        max = array[i];
}
for(let i = 0; i < 30; i++){
    if(array[i] == max) index.push(i);
}

console.log ('Dižiausia masyvo reikšmė yra ' + max + ', ir ji yra ' + index + ' pozicijose.')

//------------------------C-------------------------------------------

let sum_even = 0;

for(let i = 0; i < 30; i++){
    if(((i+1) % 2) == 0) sum_even += array[i];
}

console.log('Reikšmių suma lyginiuose indeksuose yra ' + sum_even)

//-----------------------D--------------------------------------------

let array2 = [];

for(let i = 0; i < 30; i++){
    array2[i] = array[i] - i;
}

console.log(array2);

//-----------------------E---------------------------------------------

for (let i = 0; i < 10; i++){
    array.push(randomSkaicius(5,25));
}

console.log(array);

//------------------------F--------------------------------------------

let array_even = [];
let array_odd = [];

for(let i = 0; i < 40; i++){
    if(((i+1) % 2) == 0) array_even.push(array[i]);
    else array_odd.push(array[i]);
}

console.log(array_even);
console.log(array_odd);

//-------------------------G---------------------------------------------

for(i = 0; i < 40; i++){
    if(((i+1) % 2) == 0 && array[i] > 15) array[i] = 0;
}

console.log(array);