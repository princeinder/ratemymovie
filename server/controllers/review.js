const movies=require('../models/movie');
const users=require('../models/user');
const reviews=require('../models/review');


exports.addReview= async (req,res)=>{
        const review=new reviews({
          rating:req.body.rating,
          title:req.body.title,
          comment:req.body.comment,
          user:req.params.userid
        });
         await review.save(function(err,reviewdata){
            if (err) return res.json({code:201,success:false,message:err});
            movies.findOneAndUpdate({_id:req.params.movieid},{$push: {review: reviewdata._id}}, function(err, moviedata){
             if(err)
             res.json({code:201,success:false,message:"error"})
            else
            res.json({code:200,success:true,message:"success",movie:moviedata})
             });
          });
}