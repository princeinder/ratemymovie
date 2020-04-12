const movies=require('../models/movie');
const votes=require('../models/vote');
const reviews=require('../models/review');

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

exports.getMovies = async function(req,res){
  const itemscount = await movies.countDocuments({});
  if(req.params.search=='all'){
    movies.find({}).populate('category', 'name',null, { sort: { 'name': 1 }}).populate({path: 'review',populate: { path: 'user' }}).sort( {[req.params.orderby]: [req.params.ordersort]}).skip((parseInt(req.params.limit)*parseInt(req.params.page))-parseInt(req.params.limit)).limit(parseInt(req.params.limit)).exec(function (err, items)    {
      if (err) return res.json({code:201,success:false,message:err});
      return res.json({code:200,success:true,message:"success",movies:{items:items,itemscount:itemscount,currentPage: req.params.page,pages: Math.ceil(itemscount / req.params.limit)}})
    })    
  }
  else{
  const regex = new RegExp(escapeRegex(req.params.search), 'gi');
  movies.find({ "name": regex }).populate('category', 'name',null, { sort: { 'name': 1 }}).populate({path: 'review',populate: { path: 'user' }}).sort( {[req.params.orderby]: [req.params.ordersort]}).skip((parseInt(req.params.option)*parseInt(req.params.page))-parseInt(req.params.option)).limit(parseInt(req.params.option)).exec(function (err, items)    {
        if (err) return res.json({code:201,success:false,message:err});
        return res.json({code:200,success:true,message:"success",movies:{items:items,itemscount:itemscount,currentPage: req.params.page,pages: Math.ceil(itemscount / req.params.limit)}})
      })
    }  
}

exports.getMovie =  async function(req,res){
    movies.findOne({_id:req.params.id}).populate('category', 'name',null, { sort: { 'name': 1 }}).populate({path: 'review',limit:req.params.limit,skip:(parseInt(req.params.limit)*parseInt(req.params.page))-parseInt(req.params.limit),populate: { path: 'user' }}).exec(function (err, item)    {
      if (err) return res.json({code:201,success:false,message:err});
      return res.json({code:200,success:true,message:"success",movie:item})
    })      
}


exports.getVote =  function(req,res){
  votes.findOne({_id:req.params.id}).populate('movie').exec(function (err, item)    {
    if (err) return res.json({code:201,success:false,message:err});
    return res.json({code:200,success:true,message:"success",movie:item})
  })   
}

exports.voteMovie =  function(req,res){
  votes.findOneAndUpdate({movie:req.body.id}, {[req.body.voteName]:[req.body.voteValue]}, { new: true }).exec(function (err, item)    {
    if (err) return res.json({code:201,success:false,message:err});
    return res.json({code:200,success:true,message:"success",movie:item})
  })   
}


exports.createMovie= (req,res)=>{
  // console.log(JSON.parse(req.body.category));
var cat=['5e85c3b88e89971ef6c877ec','5e85c3c48e89971ef6c877ed'];
        const movie=new movies({
          name:req.body.name,
          description:req.body.description,
          rating:req.body.rating,
          avatar:req.file.filename,
          category:cat,
          yearofreleasing:req.body.yearofreleasing});
           movies.findOne({name:req.body.name}, function(err,exists){
            if(exists)
          return res.json({code:201,success:false,message:"Already exists or some error"});
          movie.save(function(err,item){
            if (err) return res.json({code:201,success:false,message:err});
            return res.json({code:200,success:true,message:"success",movie:movie})
        });
          });
          
}