import students from "./modules/students"

console.log(students)

// let list = document.createElement('ul');
// document.getElementsByTagName('body')[0].appendChild(list);

// for(let i = 0; i < students.length; i++){
//     let list_item = document.createElement('li');
//     list_item.innerText = students[i].name;
//     document.getElementsByTagName('ul')[0].appendChild(list_item);
// }

/*
Išvesti studentus HTML sąraše
*/

//Template literals

const name = "Jonas";
const lname = "Jonaitis";

const kiekis = 12;
const kaina = 14;

console.log('Labas, mano vardas' + name + ', o pavarde' + lname);
console.log(`Mano vardas ${name}, o pavarde ${lname}`);
console.log(`Suma yra: ${kiekis * kaina}`);

//Object destructing

//Array
let [kiekis2, pavadinimas, kaina2] = [12, 'Kompiuteris', 123.456];

kiekis2 = 14;

console.log(kaina2);
console.log(kiekis2);

//Object

const student = {
    id: 5,
    firstName: 'Karolis',
    lname: 'Petraitis',
    average: 8
}

const {id, firstName:fn, lname:ln} = student;

console.log(fn);

//for of, for in

const items = [1, true, 'Ieva'];

for(const element of items){ //'in' isveda indeksus, 'of' naudojam tik su masyvais
    console.log(element);
}

for(const element in items){
    console.log(items[element]);
}


const students2 = [
    {
        id:1,
        firstName: 'Jonas',
        lname: 'Jonaitis',
        school:'BIT'
    },
    {
        id:2,
        firstName: 'Petras',
        lname: 'Petraitis',
        school:'BIT'
    },
    {
        id:3,
        firstName: 'Vardenis',
        lname: 'Pavardenis',
        school:'BIT'
    }
]

for(let student of students2){
    console.log(student);
}

for(let student of students2){ //galim naudoti of nes turim objektu masyva
    for(let studentData in student){ //naudojam 'in' nes dirbam su objektais, paima object keys
        console.log(student[studentData]);
    }
}

const students3= [
    {
        id:1,
        firstName:'Jonas',
        lname:'Jonaitis',
        shool:'BIT',
        subjects:{
            js:10,
            react:8,
            vue:5
        }
    },
    {
        id:2,
        firstName:'Petras',
        lname:'Petraitis',
        shool:'BIT',
        subjects:{
            js:6,
            react:5,
            vue:2
        }
    },
    {
        id:3,
        firstName:'Vardenis',
        lname:'Pavardenis',
        shool:'BIT',
        subjects:{
            js:10,
            react:10,
            vue:7
        }
    }
]

for(let student of students3){ 
    for(let studentData in student){ 
        // console.log(student[studentData]);
        if(studentData =='subjects'){
            console.log('Mokomieji dalykai:')
            for(let subject in student[studentData]){
                console.log(`${subject}: ${student[studentData][subject]}`)
            }
        }else{
            console.log(student[studentData])
        }
    }
}

//Spread operator

function sum(first, second){
    console.log(first + second)
}
sum(12,14);

function sum2(...numbers){
    let total = numbers.reduce((x,y)=>x + y);
    console.log(total);
}
sum2(12,45,78,56,14,78)



//Scopes(galiojimo sritis): globalus, funkcijos, bloko {}

let count = 13; //globalus scope, globaliam bloke

if(count){
    let count = 12;
}else{
    let count = 18;
}

console.log(count);

let data2 = ['IBM', 'APPLE', 'DELL']

for(let i =0; i < data2.length; i++){ // let block scope, var netiktu
    for(let i=0; i < data2.length; i++){ // var netiktu double deklaration

    }
}

function sum3(){
    let test = 'string'; //funkcijos scope
    return test;
}

//Includes

let data = ['Ieva', 'Tomas', 'Karolis'];

if(data.includes('Tomas')){
    console.log('Kontaktas surastas')
}else{
    console.log('Kontaktas nerastas')
}

//self invoking function, pati save kviecia, uzdaro koda savyje, del security naudojama.

(function (){
    console.log('testas');
})();