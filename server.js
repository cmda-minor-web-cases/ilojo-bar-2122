import express from 'express'
import fetch from 'node-fetch'

import * as prismicH from '@prismicio/helpers'
import { client } from './config/prismicConfig.js'


const app = express()
const port =  2020

const API_KEY = process.env

// Link the templating engine to the express app
app.set('view engine', 'ejs')

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views')

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  }
  next()
})

app.use(express.static('public'))


app.get("/", async (req, res) =>{
  res.render('index')
})

app.get("/story", async (req, res) =>{
  let allStories = await client.getAllByType('story')
  res.render('timeline', 
  { allStories, 
    css : "/styles/style.css" })
})

app.get('/story/:id', async (req, res) => {
  let uid = req.params.id
  let story = await client.getByUID('story', uid)
  let storyData = story.data

  res.render('story', { storyData,
    css : "/styles/story.css"})
})

app.get("/send", async (req, res) =>{
  res.render('sendStory',{
    css : "/styles/sendStory.css"})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})