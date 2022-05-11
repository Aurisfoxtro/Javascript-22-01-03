import express from 'express'
import {create} from 'express-handlebars'
import session from 'express-session'

import {port, url} from "./utils/helper.js"

import registration from "./controllers/registration.js"
import login from "./controllers/login.js"
import clients from "./controllers/clients.js"

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
        maxAge: 86400000
    }
}))

app.use('/', registration)
app.use('/', login)
app.use('/', clients)

app.listen(port)