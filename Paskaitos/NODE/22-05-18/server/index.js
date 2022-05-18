import express from 'express'
import database from './database/connection.js'

//neveike assert :/
// import config from "./config.json" assert {type: `json`}
// console.log(config)

const app = express();
 
//POST metodu perduodamu duomenu konfiguracija 
app.use( express.urlencoded({
  extended: false
}))

//Perduodamu duomenu body lygmenyje json formatu issifravimas
app.use(express.json())

// app.use('/api/', tasks)

app.listen(3001)