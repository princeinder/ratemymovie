module.exports=(mongoose)=> {
    const commentSchema=mongoose.Schema({
        name:String,
        description:String,
        rating:String,
        avatar:String,
        category:Number,
        yearofreleasing:Number,
        publicrating:{ type: mongoose.Schema.Types.ObjectId , ref: "publicrating"},
        comment:{type: mongoose.Schema.Types.ObjectId , ref: "comment"}
    }, {
        timestamps: true
    });
    module.exports=mongoose.model('comment', commentSchema);
}