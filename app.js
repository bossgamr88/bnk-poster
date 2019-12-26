const express = require('express')
const path = require('path')
const app = express()
const port = 7000

const routes = require('./routes')

app.get('/',routes.home)

app.use(express.static(path.join(__dirname,'public')))

app.listen(process.env.PORT || port)
