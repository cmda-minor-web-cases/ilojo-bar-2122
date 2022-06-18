import express from 'express'
// import multer from 'multer'
import bodyParser from 'body-parser'
import * as dotenv from "dotenv"
import 'dotenv/config'

import * as prismicH from '@prismicio/helpers'
import { router } from './router/router.js'

const app = express()
const port =  2020


// Link the templating engine to the express app
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  }
  next()
})
app.use(express.static('public'))
app.use(router)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})