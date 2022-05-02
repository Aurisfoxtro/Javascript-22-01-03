import express from 'express'
import {create} from 'express-handlebars'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

import { appendFile } from 'fs'
import { readFile } from 'fs'
import fs from 'fs/promises'


const app = express()
const hbs = create({ /* config */})

const __dirname = dirname(fileURLToPath(import.meta.url))

//express handlebars konfiguracija
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', function (req, res) {
    let name = 'Antanas'
    res.render('card', {name})
})

app.listen(3000)