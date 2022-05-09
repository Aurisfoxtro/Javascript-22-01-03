import database from "./helpers/config.js"
// import mysql from "mysql2"
//Myslq modulio su promisais importavimas
import mysql from "mysql2/promise"

const connection = await mysql.createConnection({
    host: database.database_host,
    user: database.user,
    database: database.database
    })

    // Nauju duomenu pridejimas naudojantis promisais
const insert = await connection.query('INSERT INTO clients (company_name) VALUES("UAB Maxima")')
const lastInsertId = insert[0].insertId

//Duomenu atnaujinimas
const update = await connection.query("UPDATE clients SET company_name = 'UAB \"RIMI\"'WHERE id = " + lastInsertId)

//Duomenu istrynimas
//Klaustumas reiskia, jog toje pozicijoje turetu buti idedamas kintamasis is antro parametro perduoto i query metoda
//Kintamuju galima perduoti ne viena, taciau jei ju yra daugiau jie turi buti perduoti masyve
const remove = await connection.query("DELETE FROM clients WHERE id = ?", lastInsertId)

//visu duomenu paemimas is lenteles
const select = await connection.query('SELECT * FROM clients')

console.log(select[0])

//Duomenu pridejimas i duomenu baze naudojantis callback funkciju variantu
// connection.query('INSERT INTO clients (company_name) VALUES("UAB Maxima")', (err, result)=>{
//     if(!err) console.log('Kompanija issaugota')
// })

// connection.query('SELECT * FROM clients WHERE id > 1', (err, results, fields)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(results);
//     // console.log(fields);
// })

// console.log(database)

