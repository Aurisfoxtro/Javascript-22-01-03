import express from 'express'
import {create} from 'express-handlebars'
// import {dirname} from 'path'
// import { fileURLToPath } from 'url'
import session from 'express-session'
// import fs from 'fs/promises'

import {port, url} from "./utils/helper.js"

import registration from "./controllers/registration.js"

const app = express()
const hbs = create({})

//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './templates');

//Middleware for POSt method
app.use(express.urlencoded({
    extended: false
}))

//Sesijos prijungimas ir konfiguracija
app.use(session({
    secret: 'authentification',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 86400000 // Laikas kiek galioja issaugotas sausainelis (cookie)
    }
}))

app.use('/', registration)

app.listen(port)