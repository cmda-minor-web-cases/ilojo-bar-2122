import express from 'express'

import { client } from '../../config/prismicConfig.js'  

export const renderStory =  async (req, res) => {
    let uid = req.params.id
    let story = await client.getByUID('story', uid)
    let storyData = story.data
    
    res.render('story', { storyData,
      css : "/styles/story.css"
    })
  }