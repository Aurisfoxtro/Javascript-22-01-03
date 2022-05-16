import config from "./config.js"
import mysql from 'mysql2/promise'
import { Sequelize } from 'sequelize'
import { tasks} from "../model/tasks.js"

export const database = {}

// console.log(database)
const {host, port, user, password, db} = config
try{
    const connection = await mysql.createConnection({host, port, user, password})
    await connection.query('CREATE DATABASE IF NOT EXISTS `' + db + '`')

    const sequelize = new Sequelize(db, user, password, {dialect: 'mysql'})

    database.Tasks = tasks(sequelize)

    await sequelize.sync({alter: true})
// export default connection
}catch{
    console.log('Prisijungti prie db nepavyko.')
}