import express from 'express'
import Joi from 'joi'
import multer from 'multer'
import{access, mkdir} from 'fs/promises'
import validator from '../middleware/validator.js'
import { exists, insert, getAll } from '../service/profile.js'
import {insert as portfolioInsert} from '../service/portfolio.js'

const Router = express.Router()

const diskStorage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const path = './uploads/' + req.body.UserId
        try{
            await access(path)
        }catch{
            await mkdir(path, {recursive: true})
        }
        cb(null, path)      
    },
    // filename: function (req, file, cb) {
        
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    // }
    filename: (req, file, callback) => {
        const ext = file.originalname.split('.')
 
        callback(null, Date.now() + '.' + ext[1])
    }
  })

  const upload = multer({
    storage: diskStorage,
    fileFilter: (req, file, callback) => {
        //Atliekamas failu formato tikrinimas
        if(
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/gif'
        ) {
            callback(null, true)
        } else {
            callback(null, false)
        }
    }
})

//   const upload = multer({ storage: storage })


const profileSchema = (req, res, next) =>{
    const schema = Joi.object({
        headline: Joi.string(),
        subheadline: Joi.string(),
        description: Joi.string(),
        hourly_rate: Joi.number().required(),
        location: Joi.string(),
        UserId: Joi.number().required()
    })

    validator(req, next, schema)
}

Router.get('/', async(req,res)=>{
    const profiles = await getAll()
    if(profiles){
        res.json({message: profiles, status: 'success'})
    }else{
        res.json({message: 'Įvyko klaida', status: 'danger'})
    }
})

const profileFileFields = upload.fields([
    {name: 'profile_image', maxCount: 1},
    {name: 'portfolio_items', maxCount: 20}
]) 

Router.post('/create', profileFileFields, profileSchema, async (req, res) =>{
    // console.log(req.body)

    if(await exists({
        UserId: req.body.UserId
    })){
        res.json({status: 'danger', message: 'Profilis šiam vartotojui jau sukurtas'})
        // return
    }else{
        if(req.files.profile_image){
            let image = req.files.profile_image[0]
            let path = image.path.replaceAll('\\', '/') 
            req.body.profile_image = path
        }
        let ProfileId = false
        if(ProfileId = await insert(req.body)){
            req.files.portfolio_items.map(async image=> {
                let path = image.path.replaceAll('\\', '/') 
                await portfolioInsert({image_url: path, ProfileId})
            })
            res.json({status: 'success', message: 'Profilis sėkmingai sukurtas'})
        }else{
            res.json({status: 'danger', message: 'Įvyko klaida'})
        }
    } 
})

export default Router