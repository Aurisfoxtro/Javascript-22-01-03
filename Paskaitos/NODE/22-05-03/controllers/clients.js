import express from 'express'
import {url} from "../utils/helper.js"
import fs from 'fs/promises'
import auth from "../auth/auth.js"

const Router = express.Router()

Router.use(auth)

Router.get('/clients', async (req, res)=>{
    // console.log(req.session.zmogus)
    // if(req.session.loggedin != undefined && req.session.loggedin){
        // console.log('user', req.session.user)
        let user = req.session.user
        let parsedJson = false
        let message = ''

        try{
            const data = await fs.readFile('./database.json', 'utf8')
            parsedJson = JSON.parse(data)
        } catch{
            message = 'Nėra išsaugota jokių klientų'
        }

        res.render('clients', {parsedJson, message, user})
    // }else{
    //     res.redirect(url)
    // }
})

// Router.get('/form', auth, (req, res, next)=>{
Router.get('/form', (req, res)=>{
    
        res.render('form')
        // res.redirect(url)
})

Router.post('/form-submit', async (req, res)=>{
    if(parseInt( Object.keys(req.body).length ) > 0) {
    
    let json = []
    
        try{
            const data = await fs.readFile('./database.json', 'utf8')
            let parsedJson = JSON.parse(data)
            parsedJson.push(req.body)
            json = parsedJson
        }
        catch{
            json.push(req.body)
            console.log('Duomenų bazės failas sukurtas')
        }
        await fs.writeFile('./database.json', JSON.stringify(json))

        res.redirect(url + '/clients')
    
    }else{
        res.send('Negauti duomenys')
    }
})

Router.delete('/delete-client/:id', async (req, res)=>{
    const id = req.params.id

    if(!id){
        res.json({status: 'failed', message: 'Neperduotas joks id'})
        return
    }

    try {
            const data = await fs.readFile('./database.json', 'utf8')
     
            let parsedJson = JSON.parse(data)
            
            parsedJson.splice(id, 1)

            //informacijos issaugojimas faile
            await fs.writeFile('./database.json', JSON.stringify(parsedJson))

            res.json({status: 'ok', message: 'Įrašas sėkmingai ištrintas'})
        
    } catch {
        
            res.json({status: 'failed', message: 'Nepavyko perskaityti duomenu bazes failo'})
    }
})

export default Router