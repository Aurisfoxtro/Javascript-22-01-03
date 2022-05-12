//MVC - 
// Model - sekcija atsakinga uz duomenis ir administravima
// View - grazintas html kodas
// Controller - Router administratorius

import express from 'express'
import {create} from 'express-handlebars'
import {database} from "./db/connection.js";

import tasks from "./controller/tasks.js"

const app = express();

const hbs = create({ /* config */ });
 
//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')
 
//POST metodu perduodamu duomenu konfiguracija 
app.use( express.urlencoded({
  extended: false
}))

//Perduodamu duomenu body lygmenyje json formatu issifravimas
app.use(express.json())

app.use('/assets', express.static('assets'))

app.use('/', tasks)

app.listen(3000)

//Įrašo pridėjimas
// await insert({task: 'Išplauti indus', done: 0})

// try{
//     await _delete(1)
// }catch{
//     console.log('Ištrinti nepavyko')
// }
// // console.table(await getAll())
// try{
//     await update(4, {task: 'Išvesti šunį'})
//     await update(5, {task: 'Išvesti šunį', done: 1})
// }catch{
//     console.log('Nepavyko atnaujinti įrašo')
// }
