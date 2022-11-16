const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()


app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    } else {
      next();
    }
  });


app.use(cors())
const port = 3000

app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
