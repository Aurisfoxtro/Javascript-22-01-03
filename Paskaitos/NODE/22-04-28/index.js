import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const credentials = {
    login: 'aurimas',
    password: 'labas'
}
console.log(import.meta)

// app.get('/', function (req, res) {
//     res.send('Titulinis')
//   })
  
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
  
  app.get('/', (req, res) => {
    // app.get('/query-submition', (req, res) => {
    // res.status(404) //grazinamas uzklausos statusas 404
    // res.send('<form><input/></form>') //hardkodintas html kodas
    res.sendFile(__dirname + '/templates/forma.html')
  })
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
      res.send('Klientai')
  })
  //metodai kuriuos naudosime
  //.get()
  //.post()
  //.delete()
  //.put()
  
  app.listen(3000)