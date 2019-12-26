const express = require('express')
const path = require('path')
const app = express()
const port = 7000

const routes = require('./routes')

app.set('view engine','ejs')
// app.use(express.static(path.join(__dirname,'public')))
app.use(express.static('./public'))

app.get('/',routes.home)

app.listen(process.env.PORT || port)
