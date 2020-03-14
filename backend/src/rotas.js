const express=require('express');
const multer=require('multer');
const configuracaodeAtualizacao=require('./config/atualizacao');
const ControledePostagem=require('./contoles/ControledePost')
const controledecurtidas=require('./contoles/controledeCurtidas')
const rotas=new express.Router();
const atualizacao=multer(configuracaodeAtualizacao);
rotas.get('/posts',ControledePostagem.index);
rotas.post('/posts',atualizacao.single('imagem'),ControledePostagem.store);
module.exports=rotas;
rotas.post('/posts/:id/like',controledecurtidas.store)