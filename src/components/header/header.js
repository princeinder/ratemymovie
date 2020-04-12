import React from 'react';
import { isUserAuthenicated,logoutUser} from "../../actions/auth";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apiUrl } from "../../environments/environment";

class Header extends React.Component{

render() {
  return (
    <header className="ht-header">
    <div className="container">
      <nav className="navbar navbar-default navbar-custom">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header logo">
          <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <div id="nav-icon1">
              <span />
              <span />
              <span />
            </div>
          </div>
          <a href="/"><img className="logo" src="images/logo1.png" alt="" width={119} height={58} /></a>
        </div>
        <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
        
          <ul  className="nav navbar-nav flex-child-menu menu-right">
                          
            <li><a href="#">Help</a></li>
            {this.props.isAuthenticated ? <React.Fragment><li className="dropdown profileLink first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown"><i className="ion-android-person" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1 dropdownhover-bottom">
								<li><a href="/profile">my profile</a></li>
								<li><a onClick={this.props.logoutUser}>logout</a></li>
							</ul>
						</li>
            </React.Fragment>:<React.Fragment><li className="loginLink"><a href="#">Log In</a></li>
            <li className="btn signupLink"><a href="#">Sign Up</a></li></React.Fragment>}
          </ul>
        </div>
      </nav>
    </div>
  </header>

  );
}
}

Header.propTypes = {
  isUserAuthenicated:PropTypes.array.isRequired,
  logoutUser:PropTypes.array.isRequired
};

const mapStateToProps = state => ({
     isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ isUserAuthenicated ,logoutUser})(Header);

