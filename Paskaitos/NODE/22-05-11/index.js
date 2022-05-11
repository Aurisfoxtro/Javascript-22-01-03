//MVC - 
// Model - sekcija atsakinga uz duomenis ir administravima
// View - grazintas html kodas
// Controller - Router administratorius

import express from 'express'
import {create} from 'express-handlebars'
import {database} from "./db/connection.js";
import {insert, getAll, _delete, update} from "./services/tasks.js";

const app = express();

const hbs = create({ /* config */ });
 
//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')
 
//POST metodu perduodamu duomenu  
app.use( express.urlencoded({
  extended: false
}))

app.get('/', async (req, res)=>{
    const entries = await getAll()
    res.render('tasks', {tasks: entries})
})

app.listen(3000)

//Įrašo pridėjimas
await insert({task: 'Išplauti indus', done: 0})

try{
    await _delete(1)
}catch{
    console.log('Ištrinti nepavyko')
}
// console.table(await getAll())
try{
    await update(4, {task: 'Išvesti šunį'})
    await update(5, {task: 'Išvesti šunį', done: 1})
}catch{
    console.log('Nepavyko atnaujinti įrašo')
}
