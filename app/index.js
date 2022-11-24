const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()
app.use(cors())
const host = '0.0.0.0';
const port = process.env.PORT || 3000
const path = require ('path')
app.use(router )
app.use(express.static(path.join(__dirname + "/../public")))

app.listen(port,host, () => console.log(`Magic happens on port ${port}`))

