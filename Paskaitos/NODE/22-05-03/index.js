import express from 'express'
import {create} from 'express-handlebars'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'

//Express objekto iniciavimas
const app = express()
//Handlebars variklio sukurimas
const hbs = create({ /* config */})
//Esamos direktorijos susigrazinimas
const __dirname = dirname(fileURLToPath(import.meta.url))

//Hardkodinti prisijungimo duomenys
const credentials = {
    login: 'aurimas@bit.lt',
    password: 'labas'
}
//Bazinio adreso konstravimas
const port = 3000
const url = 'http://localhost:' + port

//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './templates');

//POST metodu perduodamu duomenu
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

//resursu pasiemimo pavyzdys
app.use('/assets', express.static('assets'))

app.get('/', (req, res)=>{
    // req.session.zmogus = 'Atejo'
    if(req.session.loggedin != undefined && req.session.loggedin){
        res.redirect(url + '/clients')
    }else{
        res.render('login')
    }
})

app.post('/login-submit', (req, res)=>{
    //req.query tai kas yra perduodama adrese
    //req.params tai kas perduodama uz kiekvieno slasho
    //req.body tai kas yra perduodama post metodu
    //req.session tai kas yra issaugota sausaineliuose

    if(parseInt( Object.keys(req.body).length ) > 0) {
        if(
          req.body.login != '' &&
          req.body.password != '' &&
          req.body.username === credentials.login &&
          req.body.password === credentials.password
        ) {
            req.session.user = credentials.login
            req.session.loggedin = true
            res.redirect(url + '/clients')
        } else {
          res.send('Neteisingi prisijungimo duomenys')
        }
  
      } else {
        res.redirect(url) //Peradresavimas
      }
    
    // console.log(req.body)
    // res.send('Pavyko')
})

app.get('/clients', (req, res)=>{
    // console.log(req.session.zmogus)
    if(req.session.loggedin != undefined && req.session.loggedin){
        // console.log('user', req.session.user)
        let user = req.session.user
        res.render('clients', {user})
    }else{
        res.redirect(url)
    }
})

app.get('/logout', (req, res)=>{
    req.session.destroy(function() {
        res.clearCookie('connect.sid', { path: '/' }).status(200).redirect('/');
      });
})

app.listen(port)