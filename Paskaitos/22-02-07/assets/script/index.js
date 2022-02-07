function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

//-------------COIN A--------------------------------------------

let result = '';

while(true){
    let coin = randomSkaicius(0,1);
    if (coin) result += 'S ';
    else result += 'H ';
    if (coin == 0) break;
}
document.getElementById('coin_a_result').innerHTML = result;

//-------------COIN B---------------------------------------------

result = '';
let h_sum = 0;

while(true){
    let coin = randomSkaicius(0,1);
    if (coin) result += 'S ';
    else{
        result += 'H ';
        h_sum++;
    }
    if(h_sum == 3) break;    
}
document.getElementById('coin_b_result').innerHTML = result;

//------------COIN C-----------------------------------------------

result = '';
h_sum = 0;

while(true){
    let coin = randomSkaicius(0,1);
    if (coin){ 
        result += 'S ';
        h_sum = 0;
    }
    else{
        result += 'H ';
        h_sum++;
    }
    if(h_sum == 3) break;    
}
document.getElementById('coin_c_result').innerHTML = result;

//-----------NAILS A--------------------------------------------------

let hits = 0;

for (let i = 1; i < 6; i++){
    let nail_l = 85;
    while(nail_l > 0){
        nail_l -= randomSkaicius(5,20);
        hits++;
    }
}
document.getElementById('nails_a_result').innerHTML = 'Įkalti 5 vinims viso reikėjo ' + hits + ' mažų smūgių plaktuku.'

//-----------NAILS B----------------------------------------------------

hits = 0;
let hit;

for (let i = 1; i < 6; i++){
    let nail_l = 85;
    while(nail_l > 0){
        hit = randomSkaicius(0,1);
        if (hit){
            nail_l -= randomSkaicius(20,30);
            hits++;
        } else{
            hits++;
        }
    }
}
document.getElementById('nails_b_result').innerHTML = 'Įkalti 5 vinims viso reikėjo ' + hits + ' didelių smūgių plaktuku.'
