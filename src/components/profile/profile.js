import React from 'react';
import { isUserAuthenicated,logoutUser} from "../../actions/auth";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apiUrl } from "../../environments/environment";

 class Profile extends React.Component{

  constructor(props){
    super(props);
  }
componentWillMount(){
  this.props.isUserAuthenicated();
}

componentWillReceiveProps(nextProps){
  console.log(nextProps);
}


render(){
  var cuser=JSON.parse(this.props.currentuser);
    return (
        <div>
        <div className="hero user-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-ct">
                  <ul className="breadcumb">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      {" "}
                      <span className="ion-ios-arrow-right" />
                      Profile
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-single">
          <div className="container">
            <div className="row ipad-width">
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="user-information">
                  <div className="user-img">
                    <a href="#">
                      <img src="images/uploads/user-img.png" alt />
                      <br />
                    </a>
                    <a href="#" className="redbtn">
                      Change avatar
                    </a>
                    <span>
                      {cuser.username}
                    </span>
                    <span>
                      {cuser.email}
                    </span>
                  </div>
                  <div className="user-fav">
                    <p>Account Details</p>
                    <ul>
                      <li className="active">
                        <a href="userprofile.html">Profile</a>
                      </li>
                      <li>
                        <a href="userfavoritelist.html">Favorite movies</a>
                      </li>
                      <li>
                        <a href="userrate.html">Rated movies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="user-fav">
                    <p>Others</p>
                    <ul>
                      <li>
                        <a href="#">Change password</a>
                      </li>
                      <li>
                        <a href={this.props.logoutUser}>Log out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-sm-12 col-xs-12">
                <div className="form-style-1 user-pro" action="#">
                  <form action="#" className="user">
                    <h4>01. Profile details</h4>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Username</label>
                        <input type="text" placeholder="edwardkennedy" />
                      </div>
                      <div className="col-md-6 form-it">
                        <label>Email Address</label>
                        <input type="text" placeholder="edward@kennedy.com" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>First Name</label>
                        <input type="text" placeholder="Edward " />
                      </div>
                      <div className="col-md-6 form-it">
                        <label>Last Name</label>
                        <input type="text" placeholder="Kennedy" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Country</label>
                        <select>
                          <option value="united">United States</option>
                          <option value="saab">Others</option>
                        </select>
                      </div>
                      <div className="col-md-6 form-it">
                        <label>State</label>
                        <select>
                          <option value="united">New York</option>
                          <option value="saab">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <input className="submit" type="submit" defaultValue="save" />
                      </div>
                    </div>
                  </form>
                  <form action="#" className="password">
                    <h4>02. Change password</h4>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Old Password</label>
                        <input type="text" placeholder="**********" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>New Password</label>
                        <input type="text" placeholder="***************" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Confirm New Password</label>
                        <input type="text" placeholder="*************** " />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="submit"
                          type="submit"
                          defaultValue="change"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
) 
}
}



Profile.propTypes = {
  isUserAuthenicated:PropTypes.func.isRequired,
  logoutUser:PropTypes.array.isRequired
};

const mapStateToProps = state => ({
     loading: state.auth.loading,
     error: state.auth.error,
     isAuthenticated:state.auth.isAuthenticated,
     currentuser:state.auth.currentuser
});

export default connect(mapStateToProps, { isUserAuthenicated,logoutUser })(Profile);
