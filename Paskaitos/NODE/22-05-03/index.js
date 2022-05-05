import express from 'express'
import {create} from 'express-handlebars'
// import {dirname} from 'path'
// import { fileURLToPath } from 'url'
import session from 'express-session'
// import fs from 'fs/promises'

//Helper import
import {port, url} from "./utils/helper.js"

//Controllers import
import login from './controllers/login.js'
import clients from "./controllers/clients.js"

//Express objekto iniciavimas
const app = express()
//Handlebars variklio sukurimas
const hbs = create({ /* config */})
//Esamos direktorijos susigrazinimas
// const __dirname = dirname(fileURLToPath(import.meta.url))

//Hardkodinti prisijungimo duomenys
// const credentials = {
//     login: 'aurimas@bit.lt',
//     password: 'labas'
// }
//Bazinio adreso konstravimas
// const port = 3000
// const url = 'http://localhost:' + port

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

app.use('/', login)

//resursu pasiemimo pavyzdys
app.use('/assets', express.static('assets'))

// app.get('/', (req, res)=>{
//     // req.session.zmogus = 'Atejo'
//     if(req.session.loggedin != undefined && req.session.loggedin){
//         res.redirect(url + '/clients')
//     }else{
//         res.render('login')
//     }
// })

// app.post('/login-submit', (req, res)=>{
//     //req.query tai kas yra perduodama adrese
//     //req.params tai kas perduodama uz kiekvieno slasho
//     //req.body tai kas yra perduodama post metodu
//     //req.session tai kas yra issaugota sausaineliuose

//     if(parseInt( Object.keys(req.body).length ) > 0) {
//         if(
//           req.body.login != '' &&
//           req.body.password != '' &&
//           req.body.username === credentials.login &&
//           req.body.password === credentials.password
//         ) {
//             req.session.user = credentials.login
//             req.session.loggedin = true
//             res.redirect(url + '/clients')
//         } else {
//           res.send('Neteisingi prisijungimo duomenys')
//         }
  
//       } else {
//         res.redirect(url) //Peradresavimas
//       }
    
//     // console.log(req.body)
//     // res.send('Pavyko')
// })

// app.get('/clients', async (req, res)=>{
//     // console.log(req.session.zmogus)
//     if(req.session.loggedin != undefined && req.session.loggedin){
//         // console.log('user', req.session.user)
//         let user = req.session.user
//         let parsedJson = false
//         let message = ''

//         try{
//             const data = await fs.readFile('./database.json', 'utf8')
//             parsedJson = JSON.parse(data)
//         } catch{
//             message = 'Nėra išsaugota jokių klientų'
//         }

//         res.render('clients', {parsedJson, message, user})
//     }else{
//         res.redirect(url)
//     }
// })

// app.get('/form', (req, res)=>{
//     if(req.session.loggedin != undefined && req.session.loggedin){
//         res.render('form')
//     }else{
//         res.redirect(url)
//     }
// })

// const auth = (req, res, next)=>{
//     if(req.session.loggedin === undefined || !req.session.loggedin){
//     res.redirect(url)
//     }
//     else {
//         next()
//     }
// }

// app.get('/form', auth, (req, res, next)=>{
    
//         res.render('form')
//         // res.redirect(url)
// })

// const auth = (req, res)=>{
//     if(req.session.loggedin === undefined || !req.session.loggedin){
//     res.redirect(url)
//     return false
//     }
//     return true
// }



// app.all(auth)

// app.post('/form-submit', async (req, res)=>{
//     if(parseInt( Object.keys(req.body).length ) > 0) {
//     // console.log(req.body)
//     let json = []
//     // if(
//     //     req.body.company != '' &&
//     //     req.body.name != '' &&
//     //     req.body.surname != '' &&
//     //     req.body.address != '' &&
//     //     req.body.phone != '' &&
//     //     req.body.email != '' &&
//     //     req.body.pvm != ''
//     // ){
//     //     data.company = req.body.company
//     //     data.name = req.body.name
//     //     data.surname = req.body.surname
//     //     data.address = req.body.address
//     //     data.phone = req.body.phone
//     //     data.email = req.body.email
//     //     data.pvm = req.body.pvm

//     //     console.log(data)
//         try{
//             const data = await fs.readFile('./database.json', 'utf8')
//             let parsedJson = JSON.parse(data)
//             parsedJson.push(req.body)
//             json = parsedJson
//         }
//         catch{
//             json.push(req.body)
//             console.log('Duomenų bazės failas sukurtas')
//         }
//         await fs.writeFile('./database.json', JSON.stringify(json))
        
//         //nuskaityti is failo esamus duomenis i datalist
//         //prideti naujus duomenis i datalist
//         //irasyti datalist i faila

//         res.redirect(url + '/clients')
//     // }else{
//     //     res.send('Nepilni duomenys')
//     // }
//     }else{
//         res.send('Negauti duomenys')
//     }
// })

app.get('/logout', (req, res)=>{
    req.session.destroy(function() {
        res.clearCookie('connect.sid', { path: '/' }).status(200).redirect('/');
      });
})

//Kliento istrynimas delete metodu

// app.delete('/delete-client/:id', async (req, res)=>{
//     const id = req.params.id

//     if(!id){
//         res.json({status: 'failed', message: 'Neperduotas joks id'})
//         return
//     }

//     try {
//             const data = await fs.readFile('./database.json', 'utf8')
     
//             let parsedJson = JSON.parse(data)
     
//             // parsedJson.push(req.body)     
//             // json = parsedJson
            
//             parsedJson.splice(id, 1)

//             //informacijos issaugojimas faile
//             await fs.writeFile('./database.json', JSON.stringify(parsedJson))

//             res.json({status: 'ok', message: 'Įrašas sėkmingai ištrintas'})
        
//     } catch {
//             // json.push(req.body)
//             res.json({status: 'failed', message: 'Nepavyko perskaityti duomenu bazes failo'})
//             // console.log('Nepavyko perskaityti duomenu bazes failo')
//     }
        
        
//         // res.redirect(url + '/clients')
//     // console.log(id)
// })

//clients routerio priskyrimas

app.use('/', clients)

app.listen(port)