import express from 'express'
import {url} from "../utils/helper.js"

const Router = express.Router()

const credentials = {
    login: 'aurimas@bit.lt',
    password: 'labas'
}
Router.get('/', (req, res)=>{
    // req.session.zmogus = 'Atejo'
    if(req.session.loggedin != undefined && req.session.loggedin){
        res.redirect(url + '/clients')
    }else{
        res.render('login')
    }
})

Router.post('/login-submit', (req, res)=>{
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

export default Router