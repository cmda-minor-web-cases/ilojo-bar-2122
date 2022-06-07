import express from 'express'

import { client } from '../../config/prismicConfig.js'  

export const renderTimeline = async (req, res) =>{
  let allStories = await client.getAllByType('story')
  res.render('timeline', 
  { allStories, 
    css : "/styles/style.css" 
  })
}
