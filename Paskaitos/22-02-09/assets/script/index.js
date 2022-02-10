function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

//--------------------------------(1)---------------------------------------------------

let letters = ['A', 'B', 'C', 'E'];
let array = [];

for(let i = 0; i < 200; i++){
    array[i] = letters[randomSkaicius(0,3)];
}

console.log(array);

let sum_a = 0;
let sum_b = 0;
let sum_c = 0;
let sum_d = 0;

for(let i = 0; i < 200; i++){
    if (array[i] == 'A') sum_a++;
    else if (array[i] == 'B') sum_b++;
    else if (array[i] == 'C') sum_c++;
    else sum_d++;
}

console.log('Masyve raidžių A viso: ' + sum_a + ', B viso : ' + sum_b + ', C viso: ' + sum_c + ', D viso: ' + sum_d);

//----------------------------------(2)-------------------------------------------------

array.sort();
console.log(array);

//-----------------------------------(3)------------------------------------------------

let array1 = [];
let array2 = [];
let array3 = [];
let array_sum = [];
let unique_sum = 0;

for(i = 0; i < 200; i++){
    array1[i] = letters[randomSkaicius(0,3)];
    array2[i] = letters[randomSkaicius(0,3)];
    array3[i] = letters[randomSkaicius(0,3)];
}

for(i = 0; i < 200; i++){
    array_sum[i] = array1[i] + array2[i] + array3[i];
}

array_sum.sort();
console.log(array_sum);

for(i = 0; i < 199; i++){
    if(array_sum[i] != array_sum[i+1]) unique_sum++;
}
unique_sum++;

console.log('Unikalių reikšmių masyve: ' + unique_sum);

//------------------------------papildymas---------------------------------------------
let kombinuotas_masyvas = [];

array1.forEach((reiksme, indeksas)=>{

    if(array1[indeksas]!= array2[indeksas]
        && array1[indeksas]!=array3[indeksas]
        && array2[indeksas]!=array3[indeksas])
        kombinuotas_masyvas = array1[indeksas] + array2[indeksas] + array3[indeksas];
})

console.log('Kombinuotas masyvas su po vieną nesikartojančiomis reikšmėmis:');
console.log(kombinuotas_masyvas);

let unique = array_sum.filter( (val, key, array) => {
    return array.indexOf(val) === key;
});

console.log('Unikalių kombinacijų masyve: ' + unique.length)
//------------------------------------(4)-----------------------------------------------

let array_n1 = [];
let array_n2 = [];
let n1;
let n2;

for(let i = 0; i < 100; i++){
    
    while(true){
        n1 = randomSkaicius(100,999);
        if(!array_n1.includes(n1)){
            array_n1[i] = n1;
            break;
        }
    }

    while(true){
        n2 = randomSkaicius(100,999);
        if(!array_n2.includes(n2)){
            array_n2[i] = n2;
            break;
        }
    }
}
console.log(array_n1);
console.log(array_n2);

//-------------------------------------(5)----------------------------------------------

let array_n1_n2 = [];

for(let i = 0; i < 100; i++){

    if (!array_n2.includes(array_n1[i])) array_n1_n2.push(array_n1[i]);

}

console.log(array_n1_n2);

//--------------------------------------(6)---------------------------------------------

let array_n1n2 = [];

for(let i = 0; i < 100; i++){

    if (array_n2.includes(array_n1[i])) array_n1n2.push(array_n1[i]);

}

console.log(array_n1n2);