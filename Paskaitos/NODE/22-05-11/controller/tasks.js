import express from 'express'
import {insert, getAll, _delete, update} from "../services/tasks.js";

const Router = express.Router()

Router.get('/', async (req, res)=>{
    let {entries, message} = ''
    try{
        entries = await getAll()
    }catch{
        message = 'Nuskaityti db bazes irasus nepavyko'
    }
    res.render('tasks', {tasks: entries, message})
    
})

Router.put('/task/done/:id', async (req, res)=>{
    const id = req.params.id
    const done = req.body.done.toString()

    try{
        await update(id, {done}, true)
        // res.status(200)
        res.json({status:'success', message: 'Užduoties statusas sėkmingai pakeistas'})
    }catch{
        res.json({status: 'failed', message: 'Nepavyko atnaujinti įrašo'})
        // console.log('Nepavyko atnaujinti įrašo')
    }
    //res.json('Atnaujintas irasas ' + id)
})

Router.put('/task/update/:id', async (req, res)=>{
    const id = req.params.id
    const task = req.body.task

    try{
        await update(id, {task})
        res.json({status:'success', message: 'Užduotis sėkmingai atnaujinta'})
    }catch{
        res.json({status: 'failed', message: 'Nepavyko atnaujinti užduoties'})
    }
})

Router.delete('/task/delete/:id', async (req, res)=>{
    const id = req.params.id

    try{
        await _delete(id)
        res.json({status:'success', message: 'Užduotis sėkmingai ištrinta'})
    }catch{
        res.json({status: 'failed', message: 'Nepavyko ištrinti užduoties'})
    }
})

Router.post('/', async (req, res)=>{
    try{
        await insert(req.body)
        res.json({status:'success', message: 'Užduotis sėkmingai įterpta'})
    }catch{
        res.json({status: 'failed', message: 'Nepavyko įterpti užduoties'})
    }
})

export default Router