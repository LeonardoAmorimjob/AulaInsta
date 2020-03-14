const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const cors=require('cors');
const aplicacao=express();
const servidor=require('http').Server(aplicacao);
const io=require('socket.io')(servidor)
mongoose.connect('mongodb+srv://easyplan:1234@cluster0-t7lrb.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true})
aplicacao.use((req,res,next)=>{
    req.io=io;
   next()
})
aplicacao.use(cors());
aplicacao.use('/arquivos',express.static(path.resolve(__dirname,'..','carregamento','redinensionamento')));
aplicacao.use(require('./rotas'));
servidor.listen(3333);
