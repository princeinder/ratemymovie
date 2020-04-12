
module.exports=(mongoose,server,config) =>{
    server.listen(config.port,(req,res)=>{
        console.log(`Server started at ${config.port}`)
    })
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true ,
        useCreateIndex: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
    
}