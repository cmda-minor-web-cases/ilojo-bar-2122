import express from 'express'

import { client } from '../../config/prismicConfig.js'  
 
export const renderHome = async (req, res) =>{
    res.render('index',{
        css : "/styles/style.css"
    })
}

