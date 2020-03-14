const Post=require('../models/Post');


module.exports={
 
    async store(req,res){

        const post=await Post.findById(req.params.id);
        post.curtidas+=1;
       
        await post.save();
        req.io.emit('post',post);
        return res.json(post);
    }
}