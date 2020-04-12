module.exports=(mongoose)=> {
    const voteSchema=mongoose.Schema({
        movie: { type: mongoose.Schema.Types.ObjectId, ref: 'movie' },
        blockbuster:Number,
        hit:Number,
        average:Number,
        flop:Number
    }, {
        timestamps: true
    });
    module.exports=mongoose.model('vote', voteSchema);
}