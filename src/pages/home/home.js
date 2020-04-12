import React from 'react';
import { fetchMovies} from "../../actions/home";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { apiUrl } from "../../environments/environment";



 class Home extends React.Component{

  constructor(props) {
    super(props);
    this.getItemsCount=this.getItemsCount.bind(this);
    this.loadSpinner=this.loadSpinner.bind(this);
    this.changeSorting=this.changeSorting.bind(this);
    this.changeSortingOrder=this.changeSortingOrder.bind(this);
    this.changeViewPerPage=this.changeViewPerPage.bind(this);
    this.getMovieCategories=this.getMovieCategories.bind(this);
    this.getPagination=this.getPagination.bind(this);
    this.changePage=this.changePage.bind(this);
    this.changeSearchInput=this.changeSearchInput.bind(this);
    this.getSortOptions=this.getSortOptions.bind(this);
    this.getSortOptionsOrder=this.getSortOptionsOrder.bind(this);
    this.getViewPerPageOptions=this.getViewPerPageOptions.bind(this);
    
    this.state={
      viewsperpage:20,
      page:1,
      search:'all',
      viewsperpageoptions:{20:'20',40:'40'},
      sortoptionsselected:'yearofreleasing',
      sortoptionsorderselected:'asc',
      sortoptionsorder:{'asc':'Ascending','desc':'Descending'},
      sortoptions:{'yearofreleasing':'Releasing Year','name':'Name'}
    }
  }

componentWillMount() {
  const {fetchMovies} = this.props;  
  fetchMovies([this.state.sortoptionsselected],[this.state.sortoptionsorderselected],[this.state.viewsperpage],[this.state.page],[this.state.search]);
}

getItemsCount(){
  return this.props.movies.itemscount;
}
getNumberOfPages(){
  return this.props.movies.pages;
}

getCurrentPage(){
  return this.props.movies.currentPage;
}

loadSpinner(){
  const {loading} = this.props;
  if(loading) return true;
  return false;
}

async changeSearchInput(event){
  const {fetchMovies} = this.props;
  if(!event.target.value)
  await this.setState({'search':'all'});
  else
  await this.setState({'search':[event.target.value]});
  fetchMovies([this.state.sortoptionsselected],[this.state.sortoptionsorderselected],[this.state.viewsperpage],[this.state.page],[this.state.search]);
}

getMovieCategories(category){
  return category.map((cat,index) => (<React.Fragment>
<span className={"name"+parseInt(index+1)}><a href="#">{cat.name}</a></span>
  </React.Fragment>))
}

getMovieItems(){
  return this.props.movies.items.map(item => (<React.Fragment>
    <div className="movie-item-style-2 movie-item-style-1 movie-list-main">
      <div className="cat">
      {this.getMovieCategories(item.category)}
      </div>
    <img src={apiUrl+"/uploads/"+item.avatar} alt />
    <div className="hvr-inner">
      <a href={"/movie/"+item._id} >
        {" "}
        Read more <i className="ion-android-arrow-dropright" />{" "}
      </a>
    </div>
    <div className="mv-item-infor">
      <h6>
        <a href="#">{item.name}</a>
      </h6>
      <p className="rate">
        <i className="ion-android-star" />
        <span>8.1</span> /10
      </p>
    </div>
  </div></React.Fragment>))
}



getPagination(){
  var pageNumber=[];
  var totalpages=this.getNumberOfPages();
  var currentPage=this.getCurrentPage();
 
  for (let number = 1; number <= totalpages; number++) {
    let handleClick = () => {
      this.changePage(number);
    };
    pageNumber.push(
      <a  onClick={handleClick} className={number== currentPage ? 'active':''}>
        {number}
      </a>,
    );
  }
  return pageNumber;

}
 
getSortOptionsOrder(){
  return Object.keys(this.state.sortoptionsorder).map(key => (
    <React.Fragment>
    <option value={key}>{this.state.sortoptionsorder[key]}</option>
   </React.Fragment>))
}

getSortOptions(){
  console.log(this.state.sortoptions)
  return Object.keys(this.state.sortoptions).map(key => (
    <React.Fragment>
    <option value={key}>{this.state.sortoptions[key]}</option>
   </React.Fragment>))
}

getViewPerPageOptions(){
  return Object.keys(this.state.viewsperpageoptions).map(key => (
    <React.Fragment>
    <option value={key}>{this.state.viewsperpageoptions[key]+' Movies'}</option>
   </React.Fragment>))
}



async changeSorting(event){
  const {fetchMovies} = this.props;
  await this.setState({'sortoptionsselected':[event.target.value]});
  fetchMovies([this.state.sortoptionsselected],[this.state.sortoptionsorderselected],[this.state.viewsperpage],[this.state.page],[this.state.search]);
}
async  changeSortingOrder(event){
  const {fetchMovies} = this.props;
  await this.setState({'sortoptionsorderselected':[event.target.value]});
  fetchMovies([this.state.sortoptionsselected],[this.state.sortoptionsorderselected],[this.state.viewsperpage],[this.state.page],[this.state.search]);
}

async  changeViewPerPage(event){
  const {fetchMovies} = this.props;
  await this.setState({'viewsperpage':[event.target.value]});
  fetchMovies([this.state.sortoptionsselected],[this.state.sortoptionsorderselected],[this.state.viewsperpage],[this.state.page],[this.state.search]);
}

async  changePage(number){
  const {fetchMovies} = this.props;
  await this.setState({'page':number});
  fetchMovies([this.state.sortoptionsselected],[this.state.sortoptionsorderselected],[this.state.viewsperpage],[this.state.page],[this.state.search]);
}



render() {
  
  if(this.loadSpinner()){
  return  <div className="page-preloader"><div class="page-preloader-svg"><Loader
  type="Puff"
  color="#00BFFF"
   height={100}
   width={100}
/></div></div>
  }
else{
return (<React.Fragment><div className="page-single">
    <div className="container">
       <div className="top-search">
        <select>
          <option value="name">Name</option>
          <option value="saab">Others</option>
        </select>
        <input type="text" onChange={this.changeSearchInput} placeholder="Search for a movie" />
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="topbar-filter fw">
            <p>
              Found <span>{this.getItemsCount()} movies</span> in total
            </p>
            <label>Sort by:</label>
            <select onChange={this.changeSorting} >
             {this.getSortOptions()}
            </select>
            <select onChange={this.changeSortingOrder} >
             {this.getSortOptionsOrder()}
            </select>
       
          </div>
          <div className="flex-wrap-movielist mv-grid-fw">
         {this.getMovieItems()}
          </div>
          <div className="topbar-filter">
            <label>Movies per page:</label>
            <select onChange={this.changeViewPerPage}>
           {this.getViewPerPageOptions()}
            </select>
            <div className="pagination2">
              <span>Page {this.getCurrentPage()} of {this.getNumberOfPages()}:</span>
              {this.getPagination()}
              <a href="#">
                <i className="ion-arrow-right-b" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
  );
  }
}
}



Home.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  home: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
     loading: state.home.loading,
     error: state.home.error,
     movies: state.home.movies
});

export default connect(mapStateToProps, { fetchMovies })(Home);






 