function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}


function solveEverything(){

document.getElementById('langas').innerHTML = 'Atsitiktinis skaičius: ' + randomSkaicius(-10,10);

//----------------------------------------------------------------------------

var x = randomSkaicius (-10,10);
var y = randomSkaicius (-10,10);
var z = randomSkaicius (-10,10);

document.getElementById('pirmas').classList.remove('red');
document.getElementById('pirmas').classList.remove('blue');
document.getElementById('pirmas').classList.remove('green');
document.getElementById('antras').classList.remove('red');
document.getElementById('antras').classList.remove('blue');
document.getElementById('antras').classList.remove('green');
document.getElementById('trecias').classList.remove('red');
document.getElementById('trecias').classList.remove('blue');
document.getElementById('trecias').classList.remove('green');

if (x < 0){
    document.getElementById('pirmas').innerHTML = 'x = ' + x;
    document.getElementById('pirmas').classList.add ('red');
} else if (x == 0) {
    document.getElementById('pirmas').innerHTML = 'x = ' + x;
    document.getElementById('pirmas').classList.add ('blue');
} else {
    document.getElementById('pirmas').innerHTML = 'x = ' + x;
    document.getElementById('pirmas').classList.add ('green');
}

if (y < 0){
    document.getElementById('antras').innerHTML = 'y = ' + y;
    document.getElementById('antras').classList.add ('red');
} else if (y == 0) {
    document.getElementById('antras').innerHTML = 'y = ' + y;
    document.getElementById('antras').classList.add ('blue');
} else {
    document.getElementById('antras').innerHTML = 'y = ' + y;
    document.getElementById('antras').classList.add ('green');
}

if (z < 0){
    document.getElementById('trecias').innerHTML = 'z = ' + z;
    document.getElementById('trecias').classList.add ('red');
} else if (z == 0) {
    document.getElementById('trecias').innerHTML = 'z = ' + z;
    document.getElementById('trecias').classList.add ('blue');
} else {
    document.getElementById('trecias').innerHTML = 'z = ' + z;
    document.getElementById('trecias').classList.add ('green');
}

//--------------------------------------------------------------------------

var perkama_zvakiu = randomSkaicius(5,3000);
var zvakes_kaina;
var suma = 0;

if (perkama_zvakiu > 1000 && perkama_zvakiu <= 2000) {
    zvakes_kaina = (100 - (100*0,03))/100;
    suma = zvakes_kaina * perkama_zvakiu; 
} else if (perkama_zvakiu > 2000) {
    zvakes_kaina = (100 - (100*0,04))/100;
    suma = zvakes_kaina * perkama_zvakiu;
} else {
    zvakes_kaina = 1;
    suma = perkama_zvakiu;
}
document.getElementById('zvakes').innerHTML = 'Perkama žvakių: ' + perkama_zvakiu + '<br>Žvakės kaina: ' + zvakes_kaina +' Eur<br>Viso mokėti: ' + suma.toFixed(2) + ' Eur';

}
//---------------------------------------------------------------------------
document.getElementById('solve').addEventListener ('click', solveEverything);
