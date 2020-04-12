module.exports=(mongoose)=> {
    const categorySchema=mongoose.Schema({
        name:String,
    }, {
        timestamps: true
    });
    module.exports=mongoose.model('category', categorySchema);
}