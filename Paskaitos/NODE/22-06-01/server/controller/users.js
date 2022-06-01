import express from 'express'
import Joi from 'joi'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import validator from '../middleware/validator.js'
import { exists, getUserByEmail, insert } from '../service/users.js'
import users from "../service/users.js" //kitas budas importuoti, per objekta pasiekiamos default exportuotos funkcijos pvz.: 'users.insert'
import {loadJsonFile} from 'load-json-file'

const Router = express.Router()
const config = await loadJsonFile('./config.json')

const registerSchema = (req, res, next) =>{
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.number().integer().required()
    })

    validator(req, next, schema)
}

const loginSchema = (req, res, next) =>{
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    validator(req, next, schema)
}

Router.get('/all', async (req, res)=>{
    const usersList = await users.getAllUsers()
    if(usersList){
        res.json({message: usersList, status: 'success'})
    }else{
        res.json({message: 'Nepavyko rasti vartotojų', status: 'danger'})
    }
})

Router.post('/login', loginSchema, async (req, res)=>{
    const user = await getUserByEmail(req.body.email)

    if(!user){
        res.json({message: 'Nepavyko rasti tokio vartotojo', status: 'danger'})
        return
    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        res.json({message: 'Neteisingas slaptažodis', status: 'danger'})
        return
    }

    // console.log(config.secret)
    const data = {email: req.body.email, id: user.id}
    const token = jsonwebtoken.sign(data, config.secret, {
        expiresIn: '1h'
    })
    // console.log(token)
    // req.session.loggedIn = true
    res.cookie('token', token) //perduodami sausainelio vardas ir reiksme
    res.json({message: {userId: user.id, role: user.role}, status: 'success'})
})

// Router.get('/', async (req,res)=>{
//     const password = 'labas'
//     const hash = '........'
//     console.log(await bcrypt.hash(password, 10))
// })

Router.post('/register', registerSchema, async (req, res) =>{
    // console.log(req.body)

    if(await exists({email: req.body.email})){
        // res.send('Vartotojas egzistuoja')
        res.json({status: 'danger', message: 'Toks vartotojas jau egzistuoja'})
    }else{
        // res.send('Vartotojo nėra')
        req.body.password = await bcrypt.hash(req.body.password, 10)

        if(await insert(req.body)){
            res.json({status: 'success', message: 'Vartotojas sėkmingai sukurtas'})
        }else{
            res.json({status: 'danger', message: 'Įvyko klaida'})
        }
    }
})

export default Router