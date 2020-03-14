const multer= require('multer');
const caminho=require('path');
module.exports={
    storage:new multer.diskStorage({
        destination: caminho.resolve(__dirname,'..','..','carregamento'),
        filename: function(req,file,cb){
            cb(null, file.originalname);
        }
    })
    
    } 