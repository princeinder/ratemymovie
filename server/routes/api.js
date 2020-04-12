const movies=require('../controllers/movie');
const categories=require('../controllers/category');
const users=require('../controllers/user');
const reviews=require('../controllers/review');

module.exports=(app,upload) =>{
app.get('/api/movies/:orderby/:ordersort/:limit/:page/:search',movies.getMovies);

app.get('/api/movie/:id/:limit/:page',movies.getMovie);
app.post('/api/movie',upload.single('avatar'),movies.createMovie);

app.post('/api/movie/vote',movies.voteMovie);
app.get('/api/vote/:id',movies.getVote);


app.get('/api/categories',categories.getcategories);
app.post('/api/category',categories.createCategory);

app.get('/api/users',users.getUsers);
app.post('/api/user/create',users.createUsers);
app.post('/api/user/login',users.login);
app.get('/api/user/:search',users.checkUser);

app.post('/api/movie/review/:movieid/:userid',reviews.addReview);


}