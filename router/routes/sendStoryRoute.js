import express from 'express'

import { client } from '../../config/prismicConfig.js'  

export const renderSendStory = async (req, res) =>{
    res.render('sendStory',{
      css : "/styles/sendStory.css"
    })
}
