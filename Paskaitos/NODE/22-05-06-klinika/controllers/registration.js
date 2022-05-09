import express from 'express'
import {url} from "../utils/helper.js"
import fs from 'fs/promises'

const Router = express.Router()

Router.get ('/', (req, res)=>{
    res.render('registration')
})

Router.post('/registration-submit', async (req, res)=>{
    if(parseInt( Object.keys(req.body).length ) > 0) {
    
    let json = []
    
        try{
            const data = await fs.readFile('./database.json', 'utf8')
            let parsedJson = JSON.parse(data)
            console.log("parsedJson", parsedJson)
            let nauji_duomenys = req.body;
            nauji_duomenys.confirmed = false;
            parsedJson.push(nauji_duomenys)
            json = parsedJson
        }
        catch{
            json.push(req.body)
            console.log('Duomenų bazės failas sukurtas')
        }
        await fs.writeFile('./database.json', JSON.stringify(json))

        // res.redirect(url + '/clients')
        res.send('Vizitas užregistruotas')
    
    }else{
        res.send('Negauti duomenys')
    }
})

export default Router