import express from 'express'
import fetch from 'node-fetch'

import * as prismicH from '@prismicio/helpers'
import { client } from './config/prismicConfig.js'


const app = express()
const port =  2020

const API_KEY = process.env

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

app.use(express.static('/public'))


app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  }
  next()
})



app.get("/", async (req, res) =>{
  const document = await client.getFirst()
  console.log(document.data)
  res.render('index', { document })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})