import express from 'express'
import fs from 'fs/promises'
import auth from "../auth/auth.js"

const Router = express.Router()

Router.use(auth)

Router.get('/clients', async (req, res)=>{
    
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

            await fs.writeFile('./database.json', JSON.stringify(parsedJson))

            res.json({status: 'ok', message: 'Įrašas sėkmingai ištrintas'})
        
    } catch {
        
            res.json({status: 'failed', message: 'Nepavyko perskaityti duomenu bazes failo'})
    }
})

Router.get('/confirm-client/:id', async (req, res)=>{
    const id = req.params.id

    if(!id){
        res.json({status: 'failed', message: 'Neperduotas joks id'})
        return
    }

    try {
            const data = await fs.readFile('./database.json', 'utf8')
     
            let parsedJson = JSON.parse(data)
            
            parsedJson[id].confirmed = true

            await fs.writeFile('./database.json', JSON.stringify(parsedJson))

            res.json({status: 'ok', message: 'Klientas sėkmingai patvirtintas'})
        
    } catch {
        
            res.json({status: 'failed', message: 'Nepavyko perskaityti duomenu bazes failo'})
    }
})

export default Router