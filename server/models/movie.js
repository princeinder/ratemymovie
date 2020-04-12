module.exports=(mongoose)=> {
    const movieSchema=mongoose.Schema({
        name:String,
        description:String,
        rating:String,
        avatar:String,
        category:[{type:mongoose.Schema.Types.ObjectId , ref: "category"}],
        yearofreleasing:Number,
        vote:{ type: mongoose.Schema.Types.ObjectId , ref: "vote"},
        review:[{type: mongoose.Schema.Types.ObjectId , ref: "review"}]
    }, {
        timestamps: true
    });

    module.exports=mongoose.model('movie', movieSchema);
}