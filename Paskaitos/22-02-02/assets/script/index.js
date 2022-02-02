function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

let x = randomSkaicius(0,2);
let y = randomSkaicius(0,2);
let z = randomSkaicius(0,2);
let w = randomSkaicius(0,2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

function priskaiciuoti(x) {
    if (x == 0) nuliai++
    else if (x == 1) vienetai++
    else dvejetai++
};

priskaiciuoti(x);
priskaiciuoti(y);
priskaiciuoti(z);
priskaiciuoti(w);

console.log('Viso: ' + nuliai + ' nulių, ' + vienetai + ' vienetų, ' + dvejetai + ' dvejetų.' );

//--------------------------------------------------------------------------------------------

let skaicius = randomSkaicius(1,6);
let head;

if (skaicius == 1) head = document.createElement("h1");
if (skaicius == 2) head = document.createElement("h2");
if (skaicius == 3) head = document.createElement("h3");
if (skaicius == 4) head = document.createElement("h4");
if (skaicius == 5) head = document.createElement("h5");
if (skaicius == 6) head = document.createElement("h6");
head.innerHTML = skaicius;
document.body.appendChild(head);

//--------------------------------------------------------------------------------------------

let pirmas = randomSkaicius(0,100);
let antras = randomSkaicius(0,100);
let trecias = randomSkaicius(0,100);
let vidurkis = 0;
let apkarpytas_v = 0;
let suma = 0;
let i = 0;

vidurkis = (pirmas + antras + trecias) / 3;

if (pirmas >= 10 && pirmas <= 90){
    i++;
    suma += pirmas;
}
if (antras >= 10 && antras <= 90){
    i++;
    suma += antras;
}
if (trecias >= 10 && trecias <= 90){
    i++;
    suma += trecias;
}
apkarpytas_v = suma/i;

console.log('Vidurkis: ' + Math.round(vidurkis) + ', apkarpytas vidurkis: ' + Math.round(apkarpytas_v));

//--------------------------------------------------------------------------------------------

document.getElementById('input').addEventListener('keydown', ()=> {

    let text = document.getElementById('input').value;
    console.log(text);
    document.getElementById('output').innerHTML = text;
    
})













