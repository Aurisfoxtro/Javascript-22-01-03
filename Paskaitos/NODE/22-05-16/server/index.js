//MVC - 
// Model - sekcija atsakinga uz duomenis ir administravima
// View - grazintas html kodas
// Controller - Router administratorius

import express from 'express'
import tasks from "./controller/tasks.js"

const app = express();
 
//POST metodu perduodamu duomenu konfiguracija 
app.use( express.urlencoded({
  extended: false
}))

//Perduodamu duomenu body lygmenyje json formatu issifravimas
app.use(express.json())

app.use('/api/', tasks)

app.listen(3001)
