import express from 'express'
import {create} from 'express-handlebars'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

import { faker } from '@faker-js/faker';

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

app.get('/card', function (req, res) {
    let name = faker.name.findName();
    let address = faker.address.city();
    let company = faker.company.companyName();
    let phone = faker.phone.phoneNumber();
    let car = faker.vehicle.vehicle();
    let image = faker.image.avatar();
    // console.log("image: ", image);
    res.render('card', {name, address, company, phone, car, image})
})

app.listen(3000)