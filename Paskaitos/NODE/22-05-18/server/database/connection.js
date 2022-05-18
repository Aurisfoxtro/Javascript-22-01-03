import {loadJsonFile} from 'load-json-file'
import mysql from 'mysql2/promise'
import {Sequelize} from 'sequelize'
import {users} from '../model/users.js'
import {profile} from "../model/profile.js"

const config = await loadJsonFile('./config.json')

const {host, port, user, password, db} = config.database

export const database = {}

try{
    const connection = await mysql.createConnection({host, port, user, password})
    await connection.query('CREATE DATABASE IF NOT EXISTS `' + db + '`;')
    
    const sequelize = new Sequelize(db, user, password, {dialect: 'mysql'})

    database.Users = users(sequelize)
    database.Profile = profile(sequelize)

    await sequelize.sync({alter: true})

}catch{
    console.log('Nepavyko prisijungti prie duomenų bazės')
}

export default config