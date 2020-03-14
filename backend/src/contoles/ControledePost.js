const Post=require('../models/Post');
const sharp=require('sharp');
const path=require('path');
const fs=require('fs');

module.exports={
    async index(req,res){
        const posts=await Post.find().sort('-createdAt');
        return res.json(posts);
    },
    async store(req,res){
        const {autor,lugar,descricao,hashtags}=req.body;
        
        const{filename: imagem}=req.file;

        const [nome]=imagem.split('.');
        const nomeArquivo=`${nome}.jpg`;
        await sharp(req.file.path).resize(500).jpeg({quality:70}).toFile(
            path.resolve(req.file.destination,'redinensionamento', nomeArquivo)
        )
      fs.unlinkSync(req.file.path);
      

        const post=await Post.create({
           autor,
           lugar,
           descricao,
           hashtags,
           imagem:nomeArquivo,
        })
        req.io.emit('post',post);
        return res.json(post);
    }
}