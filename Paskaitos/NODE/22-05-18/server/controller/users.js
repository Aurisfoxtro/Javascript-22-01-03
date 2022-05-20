import express from 'express'
import Joi from 'joi'
import validator from '../middleware/validator.js'
import { exists, insert } from '../service/users.js'

const Router = express.Router()

const registerSchema = (req, res, next) =>{
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    validator(req, next, schema)
}

Router.post('/users/register', registerSchema, async (req, res) =>{
    // console.log(req.body)

    if(await exists({email: req.body.email})){
        // res.send('Vartotojas egzistuoja')
        res.json({status: 'danger', message: 'Toks vartotojas jau egzistuoja'})
    }else{
        // res.send('Vartotojo nėra')
        await insert(req.body)
        res.json({status: 'success', message: 'Vartotojas sėkmingai sukurtas'})
    }
})

export default Router