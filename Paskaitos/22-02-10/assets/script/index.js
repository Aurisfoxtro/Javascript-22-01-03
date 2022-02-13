function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

// Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

let array = []

for(let i = 0; i < 10; i++){
    if(i == 0 || i == 1) array[i] = randomSkaicius(5, 25);
    else array[i] = array[i - 1] + array[i - 2];    
}

console.log(array);

// Sugeneruokite 101 elemento masyvą su atsitiktiniais skaičiais nuo 0 iki 300. Reikšmes kurios tame masyve yra ne unikalios pergeneruokite iš naujo taip, kad visos reikšmės masyve būtų unikalios. Išrūšiuokite masyvą taip, kad jo didžiausia reikšmė būtų masyvo viduryje, o einant nuo jos link masyvo pradžios ir pabaigos reikšmės mažėtų. Paskaičiuokite pirmos ir antros masyvo dalies sumas (neskaičiuojant vidurinės). Jeigu sumų skirtumas (modulis, absoliutus dydis) yra didesnis nei | 30 | rūšiavimą kartokite. (Kad sumos nesiskirtų viena nuo kitos daugiau nei per 30)

let unique_array = [];
let sorted_array = [];
let max = 0;
let left = [];
let right = [];

for (i = 0; i < 101; i++){
    while(true){
        let skaicius = randomSkaicius(0,300);
        if(!unique_array.includes(skaicius)){
            unique_array[i] = skaicius;
            break;
        }        
    }
}
console.log(unique_array);
sorted_array = unique_array.sort(function(a,b){return a-b});
console.log(sorted_array);
