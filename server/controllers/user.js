const users=require('../models/user');

exports.getUsers = (req,res) =>{
    users.find(function (err, users) {
        if (err) return console.error(users);
        return res.json({users:users})
      })
    
}


exports.createUsers=function(req,res){

  const user=new users({
    username:req.body.username,
    email:req.body.email
});
  users.findOne({username:req.body.username}, function(err,exists){
  if(exists)
        return res.json({code:201,success:false,message:"Already exists or some error"});
        user.setPassword(req.body.password);
        user.save(function (err, doc) {
        if (err) return res.json({code:201,success:false,message:err});
        return res.json({code:200,success:true,user:doc})
      })
});
}

exports.checkUser=function(req,res){

  const regex = new RegExp(escapeRegex(req.params.search), 'gi');
  users.find({ "username": regex }).exec(function(err,exists){
     if(exists)
     return res.json({code:201,success:false,message:err,user:1});
     else
     return res.json({code:200,success:true,message:err,user:0});
  });
}


exports.login = function(req, res) {

	users.findOne({  $or: [{email: req.body.uemail},{username:req.body.uemail}] }, function(err, user) {
		if (err) throw err;
		if (!user) {
		  res.send({code:201,success: false, message: 'Authentication failed. Wrong username or password.'});
		} else {
			if (user.validPassword(req.body.password)) {
        var token =user.getToken(user);
			  res.json({code:200,success: true, message: 'user logged in successfully',user:user,token:token});
			} else {
			  res.send({code:201,success: false, message: 'Authentication failed. Wrong username or password.'});
			}
		}
	  });

}
