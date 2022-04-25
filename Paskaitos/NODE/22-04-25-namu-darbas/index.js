import readline from 'readline';
import chalk from 'chalk';

let area = '';

for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 25; j++){
        area += '*'
    }
    if(i != 3) area += '\n'    
}

console.log(chalk.yellow(area));
console.log(chalk.green(area));
console.log(chalk.red(area));


class Memory{
    static login = 'login';
    static password = '123';
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Įveskite prisijungimo vardą: ', login =>{
    rl.question('Įveskite slaptažodį: ', password =>{
        if (login === Memory.login && password === Memory.password){
            console.log(chalk.green('Prisijungimas sėkmingas'))
        }else{
            console.log(chalk.red('Prisijungti nepavyko'))
        }

        rl.close()
    })
})

