import { randomBytes } from 'crypto'
import fs from 'fs/promises'

const random = (min, max) => {
    return Math.floor(Math.random() * (max- min + 1) + min)
}

const loterija = async ()=>{

const names = ['Egle', 'Vidas', 'Giedrius', 'Juste', 'Dominyka', 'Aleksandras', 'Virgis', 'Deimante', 'Deividas', 'Paulius']
let contents = JSON.stringify(names)

try{
    await fs.access('database.json')
}catch{
    await fs.writeFile('./database.json', JSON.stringify(names))
}
// try{
    const fileNames = await fs.readFile('./database.json', 'utf8')

    let fileNamesObject = JSON.parse(fileNames)
    let winner = random(0,9)
    let stats = fileNamesObject[fileNamesObject.length - 1]

    if(stats != undefined && stats.hasOwnProperty('winners')){
        if(stats.winners.hasOwnProperty(winner)){
            if(stats.winners[winner] < 2){
                fileNamesObject[fileNamesObject.length -1].winners[winner]++
                console.log('Loterija antra karta laimejo ' + fileNamesObject[winner])
            }
        }else{
            fileNamesObject[fileNamesObject.length -1].winners[winner] = 1
            console.log('Loterijos etapa laimejo: ' + fileNamesObject[winner])
        }
    }else{
    fileNamesObject.push({
        winners : {
            [winner]: 1
        }
    })
        console.log('Loterijos etapa laimejo: ' + fileNamesObject[winner])
    }
    let jsonString = JSON.stringify(fileNamesObject)
    console.log(jsonString)

    await fs.writeFile('./database.json', jsonString)

    let winnerKeys = Object.keys(fileNamesObject[fileNamesObject.length -1].winners)
    let status = fileNamesObject[fileNamesObject.length - 1]

    if(winnerKeys.length >= 10){
        result = Object.keys(stats.winners)
        // let done = true
        // const result = winnerKeys.filter(w => w < 2)
        // console.log(result)
        // winnerKeys.filter(key => {
        //     let count = fileNamesObject[fileNamesObject.length -1].winners[value]
        //     if(count <2){
        //         done = false
        //     }
        // })
    }

    setTimeout(loterija, 1000)

// }catch{
//     console.log('Duomenu failas sukurtas')
// }
}

loterija()

