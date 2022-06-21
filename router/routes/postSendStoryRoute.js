import nodemailer from 'nodemailer'
import multer from 'multer'

import * as dotenv from "dotenv"
import 'dotenv/config'

import { upload, storage, multerUploads } from './multer.js'

const {
    MAIL_PW
  } = process.env
  dotenv.config()

export const postSendStory = async (req, res, next) =>{   
    // uploaded files to images/uploads
    multerUploads(req, res)
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        secureConnection: false,
        auth: {
          user: 'ilojobar@gmail.com',
          pass: MAIL_PW
        }
      })
    
    let info = {
        from: req.body.mail, 
        to: 'ilojobar@gmail.com',
        subject: req.body.title, 
        html: "<h4>Name:</h4>" + req.body.name + "<h4>E-mail:</h4>" + req.body.mail + "<h4>The title:</h4> " + req.body.title + "<h4>The story:</h4>" + req.body.story,
      //   attachments: [
      //     { filename: '1.png', path: './public/images/1.png' }
      //  ]
    };
    
    transporter.sendMail(info, function(error){
        if (error) {
          console.log('Error:' + error);
        } else{
            console.log('sucesss')
        }
    })
    res.redirect('/send')
}