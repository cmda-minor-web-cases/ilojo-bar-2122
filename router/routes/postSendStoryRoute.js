import nodemailer from 'nodemailer'
import multer from 'multer'

import * as dotenv from "dotenv"
import 'dotenv/config'

export const upload = multer({ dest: "public/images/uploads/" });
const {
    MAIL_PW
  } = process.env
  dotenv.config()

export const postSendStory = async (req, res, next) =>{   
    const images = req.files
    const attachments = images.map((image)=>{
        return { filename: image.originalname, path: image.destination + image.filename };
    })
        
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
        attachments: attachments
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