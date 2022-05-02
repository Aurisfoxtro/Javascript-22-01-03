import express from 'express'
import {create} from 'express-handlebars'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

import { appendFile } from 'fs'
import { readFile } from 'fs'
import fs from 'fs/promises'


const app = express()
const hbs = create({ /* config */})
const __dirname = dirname(fileURLToPath(import.meta.url))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './templates');

const credentials = {
    login: 'aurimas',
    password: 'labas'
}
// console.log(import.meta)

//handlebars naudojimas, kvieciamas sablonas 'forma' su render metodu
app.get('/', function (req, res) {
    let name = 'Antanas'
    //kintamojo perdavimas per objekta i 'forma' handlebar'a
    res.render('forma', {name, indeksas: 12})
  })
  
  app.get('/loop', function (req, res) {
    let variables = {
        vardas: 'Julijus',
        pavarde: 'Cezaris',
        skaiciai: [20, 15, 100, 999999],
        if: true,
        nera: false,
        objektas: {
            tipas: 'Automobilis',
            metai: 1990,
            ta: '2023-12-01'
        }
    }
    res.render('loop', variables)
  })

  app.get('/home', function (req, res) {
    let jsonString = {
        reiksmes : [10, 50, "String", 10]
    }  
    res.json(jsonString)
      //aplication/json
  })
  
//   app.get('/buy/:perduodamas', function (req, res) {
    app.get('/params/:perduodamas', function (req, res) {
      console.log(req.params.perduodamas) //req.params perduodami parametrai po pasvirojo bruksnio adrese
      //req.query perduodami url query parametrai
      // console.log(req.params.id)  // /buy/:  ir req.params. turi ta pati kintamaji id
      res.send('<h1>Perku</h1>')
  })
  
//   app.get('/', (req, res) => {

    // app.get('/query-submition', (req, res) => {
    // res.status(404) //grazinamas uzklausos statusas 404
    // res.send('<form><input/></form>') //hardkodintas html kodas
    
//     res.sendFile(__dirname + '/templates/forma.html')
//   })

  app.get('/send', (req, res) =>{
      res.sendFile(__dirname + '/templates/duomenys.html')
  })
  let data = {
      name: '',
      surname: '',
      address: '',
      phone: '',
      email: ''
  }
  app.get('/data', (req, res) =>{
      if(req.query.name != '' &&
        req.query.surname !='' &&
        req.query.address != '' &&
        req.query.phone != '' &&
        req.query.email != ''
      ){  
          data.name = req.query.name;
          data.surname = req.query.surname;
          data.address = req.query.address;
          data.phone = req.query.phone;
          data.email = req.query.email;
          console.log(data);

          appendFile('./database.json', JSON.stringify(data), (err)=>{
              if(err) throw err;
              console.log('Duomenys įrašyti į failą')
          })

          res.send('Duomenys sekmingai priimti')
      }else{
          res.send('Nera gauti pilni duomenys')
      }
  })

  app.get('/login-submit', function (req, res) {
    //duomenu perdavimas per url query:
    //http://domenas.com/?parametras=test&parametras2=gavom-antra-parametra
    if(parseInt(Object.keys(req.query).length) > 0){
        if(req.query.login != '' &&
           req.query.password != '' &&
           req.query.login === credentials.login &&
           req.query.password === credentials.password
        ){
            // console.log('Teisingai')
            // res.send('Prisijungta')
            res.redirect('http://localhost:3000/clients')
        }else{
            res.send('Neteisingi prisijungimo duomenys')
        }
        // console.log(req.query.login)
        // console.log(req.query.password)
        // res.send('<h1>Query</h1>')
    }else{
        res.redirect('http://localhost:3000/') //peradresavimas
        // res.send('Neužpildyti prisijungimo duomenys')
    }
})

    

  app.get('/clients', (req, res)=>{
      // jeigu norim naudoti viduj await - reikia nurodyti, kad f-ja asinchronine
      //app.get('/clients', async (req, res)=>{ ... })
    
      // res.send('Klientai:')
    
    let jsondata = { 
        name: '',
        surname: '',
        address: '',
        phone: '',
        email: ''
    }
    // let jsondata = [];

    let output = ``

    // let data = await fs.readFile('./database.json', 'utf8')
    readFile('./database.json', 'utf8', (err, data) =>{
        if (err) throw err;
        console.log('data from a file: ', data)
        jsondata = JSON.parse(data)
        // jsondata.push(req.query)
        console.log('jsondata', jsondata)
        // console.log('inside name: ', jsondata.name) 
   
        // console.log('name: ', jsondata.name)

        //let masyvas = JSON.parse(data)
        //masyvas.forEach(value => {  output += `<tr><td>${value.name}</td> ...` })
        
        output = `</br><table><tr><th>Name</th><th>Surname</th><th>Address</th><th>Phone</th><th>Email</th></tr>`
        output += `<tr><td>${jsondata.name}</td><td>${jsondata.surname}</td><td>${jsondata.address}</td><td>${jsondata.phone}</td><td>${jsondata.email}</td></tr>`
        output += `</table>`
    
        res.send(output);
    })


  })
  //metodai kuriuos naudosime
  //.get()
  //.post()
  //.delete()
  //.put()
  
  app.listen(3000)