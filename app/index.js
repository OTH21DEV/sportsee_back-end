const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()

/*
app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    } else {
      next();
    }
  });
*/



//TEST
/*
const whitelist = ["http://localhost:3000"]

const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  }

  //
  
  */
  app.use(cors())
const port = 3000

app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
