const express = require('express')

const routes = require('./routes')

const app = express()

// receber dados de formulario
app.use(express.urlencoded({ extended: true }))

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server is listening on port ${port}!`))