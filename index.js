const express = require('express')
const { create } = require('express-handlebars')
const router = require('./routes/routerPage.js')
const routerPage = require('./routes/routerPage.js')


const app = express()
const PORT = 8080
const path = __dirname + '/public'

const hbs = create({
    helpers: {
    }
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')


app.use(express.static(path))
app.use('/', routerPage)


const server = app.listen(PORT, () => {
    console.log(`Servidor trabajando con normalidad en el puerto: ${PORT}`)
})

server.on('Error', err => console.log(`Tenemos un error: ${err}`))