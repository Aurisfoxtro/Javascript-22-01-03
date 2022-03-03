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

// function changeGrey(){
//     document.querySelectorAll('.prices').forEach(e=>e.style.backgroundColor = 'grey')
// }
// function changeWhite(){
//     document.querySelectorAll('.prices').forEach(e=>e.style.backgroundColor = 'white')
// }
// if(document.querySelectorAll('.prices')[0].style.backgroundColor == ''){
//     document.querySelectorAll('.prices').forEach(e=>e.addEventListener('click', changeGrey));
// }else{
//     document.querySelectorAll('.prices').forEach(e=>e.addEventListener('click', changeWhite));
// }

function changeColor(){
    let elem = document.querySelectorAll('.prices')[0].style.backgroundColor;
    if(elem == 'white' || elem == undefined || elem == '' || elem == null){
        document.querySelectorAll('.prices')[0].style.backgroundColor = 'grey';
    }else{
        document.querySelectorAll('.prices')[0].style.backgroundColor = 'white'; 
    }
}

document.querySelectorAll('.prices')[0].addEventListener('click', changeColor);

//d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

function paintOrange(){
    document.getElementById('contacts').style.color = 'orange';
}
document.getElementById('contacts').addEventListener('click', paintOrange);

//e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;

function enlarge(){
    document.getElementById('contacts').style.fontSize = '20px';
}
document.querySelector('#contacts > u').addEventListener('click', enlarge);

//f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element

function remove(ev){
    document.querySelectorAll('#contacts')[0].style.fontSize = '16px';
    document.querySelectorAll('#contacts')[0].style.color = 'black';
    ev.stopPropagation();
}
document.querySelectorAll('#contacts > b')[0].addEventListener('click', remove);

//g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
function returnColor(){
    document.getElementsByTagName('h1')[0].style.color = 'darkgreen';
}
document.getElementById('h1-color-back').addEventListener('click', returnColor);

function returnFont(){
    document.getElementsByTagName('h1')[0].style.fontSize = '2em';
}
document.getElementById('h1-font-back').addEventListener('click', returnFont);

//4. Elementų grupių events
//a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

function paintRed(){
    document.querySelectorAll('li.new').forEach(e=>e.style.color = 'red');
}
document.querySelectorAll('li.new').forEach(e=>e.addEventListener('dblclick', paintRed));

//b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

function changeFont(){
    document.querySelectorAll('li:not(.like-button').forEach(e=>e.style.fontSize = '130%');
}

document.querySelectorAll('li:not(.like-button)').forEach(e=>e.addEventListener('click', changeFont));

//c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;

function addToClass(arg){
    document.querySelector(`#${arg} .like-button`).parentNode.classList.add('like');
    // console.log(document.querySelector('.like-button').parentNode);
}

// document.querySelector('#zirafos .like-button').addEventListener('click', addToClass('zirafos'));
// document.querySelector('#plesrunai .like-button').addEventListener('click', addToClass('plesrunai'));
// document.querySelector('#gyvates .like-button').addEventListener('click', addToClass('gyvates'));
// document.querySelector('#zoliaedziai .like-button').addEventListener('click', addToClass('zoliaedziai'));

document.querySelectorAll('.animals > ul').forEach(e=>{
    e.querySelector('.like-button').addEventListener('click', ()=>{
        e.classList.add('like');
    })
})

//5. Dinaminis elementų kūrimas (su createElement)
//a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

let par = document.createElement('h2');
par.innerText = 'Senjorai tik 1.99 eur';
document.querySelector('.prices').appendChild(par);

//b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

let para = document.createElement('h2');
para.innerText = "Senjorų grupė iki 10: tik 5.99 eur";
para.classList.add('new');
para.addEventListener('click', ()=>{para.style.backgroundColor = 'green'});
document.querySelector('.prices').appendChild(para);

//c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

const allUlDom = document.querySelectorAll('.animals > ul');
    allUlDom.forEach(e => {
        const likeBtnDom = e.querySelector('.like-button');
        const li = document.createElement('li');
        const txt = document.createTextNode('NEPATINKA');
        li.appendChild(txt);
        li.addEventListener('click', () =>  e.classList.remove('like'));
        likeBtnDom.after(li);
    });

//d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta

const fieldset = document.createElement('fieldset');
const legend = document.createElement('legend');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btnText1 = document.createTextNode('Pabraukti H1 tagą');
const btnText2 = document.createTextNode('Nepabraukti H1 tagą');
const legendText = document.createTextNode('HEADER 3');
legend.appendChild(legendText);
fieldset.appendChild(btn1);
fieldset.appendChild(btn2);
btn1.appendChild(btnText1);
btn2.appendChild(btnText2);
fieldset.appendChild(legend);
document.getElementById('contacts').before(fieldset);

btn1.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'underline');
btn2.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'none');
