// 1. Atskiri elementai
//a. Tamsiai žaliai nuspalvinti h1 tagą;

// let head = document.getElementsByTagName("h1");
// console.log(head);
// head[0].style.color = 'green';

// let head2 = document.getElementById("greet");
// // console.log(head2);
// head2.style.backgroundColor = 'darkgreen';

document.querySelector('h1').style.color = "darkgreen";

//b. Tagui i pridėti klasę small;

// let icons = document.getElementsByTagName("i");
// console.log(icons);
// icons[0].classList.add('small');

document.querySelector('i').classList.add('small');

// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//c. Iš tago h1 pašalinti klasę main;

document.getElementsByTagName('h1')[0].classList.remove("main");

// document.getElementsByClassName("main")[0].classList.remove("main");

//d. Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove

document.querySelector('h1 + h2').classList.add('first');
document.querySelector('h1 + h2').classList.remove('main');

//e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

document.querySelector('h2 > span:first-of-type').style.fontSize = '10px';
document.querySelector('h2 > span:first-of-type').style.color = 'grey';

//2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//a. Suskaičiuoti kiek yra h2 tagų;

console.log(document.getElementsByTagName('h2').length);

//b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

console.log(document.getElementsByTagName('h2').length -
document.querySelectorAll('h2.first').length);

//c. Visus h2 tagus nuspalvinti šviesiai mėlynai

document.querySelectorAll('h2').forEach(e=>e.style.color = 'lightblue');

//d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

document.querySelectorAll('div.prices > h2').forEach(e=>e.classList.add('price-tag'));

//e. Pabraukti visus tagus su klase new;

document.querySelectorAll('.new').forEach(e=>e.style.textDecoration = 'underline');

//f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

console.log(document.getElementsByTagName('ul').length);
console.log(document.querySelectorAll('ul#zirafos > li:not(.like-button)').length);

//g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

document.querySelectorAll('ul').forEach(e=>{
    e.style.border = '2px solid black';
    e.style.padding = '15px 50px';
});

//h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

console.log(document.querySelectorAll('ul > li.new').length);

//i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

console.log(document.querySelectorAll('ul#zirafos > li.new').length);
console.log(document.querySelectorAll('ul#plesrunai > li.new').length);
console.log(document.querySelectorAll('ul#gyvates > li.new').length);
console.log(document.querySelectorAll('ul#zoliaedziai > li.new').length);

//3. Elementų events
//a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
function paintGreen(){
    document.getElementsByTagName('h1')[0].style.color = 'green';
}
document.getElementById("h1-color").addEventListener('click', paintGreen);

function setTo10(){
    document.getElementsByTagName('h1')[0].style.fontSize = '10px';
}
document.getElementById("h1-font").addEventListener('click', setTo10);

//b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
function bolder(){
    document.getElementsByTagName('i')[0].style.fontWeight = 'bold';
}
document.getElementsByTagName('i')[0].addEventListener('click', bolder);

//c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

function changeGrey(){
    document.querySelectorAll('.prices').forEach(e=>e.style.backgroundColor = 'grey')
}
function changeWhite(){
    document.querySelectorAll('.prices').forEach(e=>e.style.backgroundColor = 'white')
}
if(document.querySelectorAll('.prices')[0].style.backgroundColor == 'white'){
    document.querySelectorAll('.prices').forEach(e=>e.addEventListener('click', changeGrey));
}else{
    document.querySelectorAll('.prices').forEach(e=>e.addEventListener('click', changeWhite));
}

// ???????????????

//d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

function paintOrange(){
    document.getElementById('contacts').style.color = 'orange';
}
document.getElementById('contacts').addEventListener('click', paintOrange);

//e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;



//f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element



//g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
function returnColor(){
    document.getElementsByTagName('h1')[0].style.color = 'darkgreen';
}
document.getElementById('h1-color-back').addEventListener('click', returnColor);

function returnFont(){
    document.getElementsByTagName('h1')[0].style.fontSize = '2em';
}
document.getElementById('h1-font-back').addEventListener('click', returnFont);