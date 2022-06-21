import multer from 'multer'
import express from 'express'

const app = express()
   

export const upload = multer({ dest: "public/images/uploads/" });

export function multerUploads(req, res){
    console.log(req.body)
    console.log(req.files[0])

}