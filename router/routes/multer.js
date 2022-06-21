import multer from 'multer'
import express from 'express'

const app = express()
   
export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.filename)
  	}
})

export const upload = multer({ storage: storage })

export function multerUploads(req, res){
    console.log(req.body)
    console.log(req.files)
}