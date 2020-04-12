module.exports=(mongoose,crypto,jwt,secret)=>{
    var userSchema = mongoose.Schema({  
        username:{type:String,required:true},
        email:{type:String,required:true},
        hash : String, 
        salt : String, 
        status:{type:Boolean,default:true},
    }, {
        timestamps: true
    });
userSchema.methods.setPassword = function(password) { 
        this.salt = crypto.randomBytes(16).toString('hex'); 
        this.hash = crypto.pbkdf2Sync(password, this.salt,  
        1000, 64, 'sha512').toString('hex'); 
        }; 
 userSchema.methods.validPassword = function(password) { 
     console.log(password)
    var hash = crypto.pbkdf2Sync(password,  
     this.salt, 1000, 64, 'sha512').toString('hex'); 
     return this.hash === hash; 
 };
 
 userSchema.methods.getToken = function(user) { 
   console.log(secret)
    var token = jwt.sign(user.toJSON(), secret);
     return token; 
 }; 
module.exports = mongoose.model('user', userSchema);
}