module.exports=(mongoose)=> {
    const reviewSchema=mongoose.Schema({
        rating:String,
        title:String,
        comment:String,
        user:{type: mongoose.Schema.Types.ObjectId , ref: "user"}
    }, {
        timestamps: true
    });
    module.exports=mongoose.model('review', reviewSchema);
}