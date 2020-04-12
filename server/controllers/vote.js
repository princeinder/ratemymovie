

const votes=require('../models/vote');

exports.getVotes = function(req,res){
    votes.find(function (err, categories)    {
        if (err) return res.json({code:201,success:false,message:err});
        return res.json({code:200,success:true,message:"success",data:categories})
      })
    
}
exports.createCategory=(req,res)=>{
    const votes=new votes({name:req.body.name,_id:req.body.id});
    votes.save(function(err,categories){
        if (err) return res.json({code:201,success:false,message:err});
        return res.json({code:200,success:true,message:"success",data:categories})
    });
}
