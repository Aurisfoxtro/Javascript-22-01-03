import fs from 'fs/promises'
import {readFile} from 'fs'

//Relative paths
//  ./test/test.js
//Absolute paths
// C:\\User\Desktop\etc\etc\hello.txt


// asinchronines f-jos pavyzdys
const asinchronineFunkcija = async () =>{
}


// const filehandle = await fs.open('./hello.txt', 'r')

// const hello = await filehandle.readFile({encoding: 'utf-8'})

// console.log(hello)

//filesystem callbacks

readFile('./hello.txt', 'utf8', (err, data) =>{
    console.log(data)
})

let json = '[]';
// const filehandle = await fs.open('./database.json', 'r')
// const hello = await filehandle.readFile({encoding: 'utf-8'})
try{
const hello = await fs.readFile('./database.json', 'utf8')

// console.log(hello)

json = JSON.parse(hello)

// console.log(json[0].orderId)

json[0].test = 'Test'

// console.log(json[0])

json = JSON.stringify(json)
}catch{
    console.log('Duomenu bazes failas sukurtas')
    // await fs.writeFile('./database.json', '[]')
}
await fs.writeFile('./database.json', json)

let savedData = await fs.readFile('./database.json', 'utf8')

// console.log(JSON.parse(savedData))


try{
    await fs.access('./modules')
    console.log('Direktorija egzistuoja')
}catch{
    console.log('Direktorijos rasti nepavyko')
    fs.mkdir('./modules')
}

// filehandle.writeFile(json).then((success) => {
//     console.log(success)
// })