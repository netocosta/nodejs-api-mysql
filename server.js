const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')

const app = express()

// habilita cors
// libera para todos os servidores
app.use(cors())

// libera para um servidor especifico
// app.use(cors({
//   origin: 'http://127.0.0.1:5500'
// })) 

// libera para varios servidores
const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://www.app.com.br'
]

app.use(cors({
  origin: function (origin, callback) {
    let allowed = true

    if (!origin) allowed = true // mobile app

    if (!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))

// receber dados do body como json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server is listening on port ${port}!`))