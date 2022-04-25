import readline from 'readline';
import process from 'process'; //nebutina importuoti
import chalk from 'chalk';

//duomenu priemimo ir grazinimo konsoleje interfeiso konfiguracija
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//vardo perdavimas ir grazinimas

// rl.question('Įveskite savo vardą: ', vardas =>{
//     console.log('Jūsų vardas yra ' + vardas)
//     rl.close()
// })

//Dauginimas
// rl.question('Įveskite skaičių nuo vieno iki dešimt: ', digit =>{
//     if(digit > 0 && digit <= 10){
//         for(let i = 1; i <= 10; i++){
//             console.log(digit + 'x' + i + ' = ' + (digit*i))
//         }
//     }else{
//         console.log('Įvestas neteisingas skaičius')
//     }
//     rl.close()
// })

// rl.question('Įveskite savo vardą: ', vardas =>{
//     rl.question('Įveskite savo pavardę: ', (pavarde) =>{
//         console.log('Jūsų vardas ir paradė yra: \n' + vardas + '\t' + pavarde)
//         rl.close()
//     })
// })

rl.question('Įveskite skaičių nuo: ', digitfrom =>{
    rl.question('Įveskite skaičių iki: ', digitupto =>{
        console.log(`${chalk.bgCyan.bold('kg')} \t ${chalk.bgCyan.bold('pound')} \t ${chalk.bgCyan.bold('stone')}`);
        for(let i = parseInt(digitfrom); i <= parseInt(digitupto); i++){
            let pound = (i * 2.2).toFixed(2);
            let stone = (i * 0.16).toFixed(2);
            console.log(chalk.blue(i) + '\t' + chalk.green(pound) + '\t' + chalk.red(stone));
        }
        rl.close()
    })
})

// let digit = 3

// for(let i = 1; i <= 10; i++){
//     console.log(digit + 'x' + i + ' = ' + (digit*i))
// }

//Production enviroment - kodas kuris yra paruostas vartojimui
//Developmental enviroment - kodas kuris yra gaminamas arba testuojamas