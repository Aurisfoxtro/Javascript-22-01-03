// import http from 'http'

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello world');
// });

// server.listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// });

import express from 'express'
//express objekto inicijavimas
const app = express()
//routeris
app.get('/', function (req, res) {
  res.send('Titulinis')
})

app.get('/home', function (req, res) {
    res.json('Namai')
    //aplication/json
})

app.get('/buy/:perduodamas', function (req, res) {
    // console.log(req.params.id)  // /buy/:  ir req.params. turi ta pati kintamaji id
    res.send('<h1>Perku</h1>')
})


//metodai kuriuos naudosime
//.get()
//.post()
//.delete()
//.put()

app.listen(3000)
