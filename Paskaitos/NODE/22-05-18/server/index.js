import express from 'express'
import database from './database/connection.js'
import users from './controller/users.js'

//neveike assert :/
// import config from "./config.json" assert {type: `json`}
// console.log(config)

const app = express();
 
//POST metodu perduodamu duomenu konfiguracija 
app.use( express.urlencoded({
  extended: false
}))

//Perduodamu duomenu body lygmenyje json formatu issifravimas, kad galetume naudoti json bodyje
app.use(express.json())

app.use('/api', users)

app.listen(3001)