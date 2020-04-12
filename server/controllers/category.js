

const categories=require('../models/category');

exports.getcategories = function(req,res){
    categories.find(function (err, categories)    {
        if (err) return res.json({code:201,success:false,message:err});
        return res.json({code:200,success:true,message:"success",categories:categories})
      })
    
}
exports.createCategory=(req,res)=>{
    const category=new categories({name:req.body.name});
    categories.findOne({name:req.body.name}, function(err,exists){
        if(exists)
        return  res.json({code:201,success:false,message:"Categroy already exists"});
    category.save(function(err,category){
        if (err) return res.json({code:201,success:false,message:err});
        return res.json({code:200,success:true,message:"success",category:category})
    });
});
}
