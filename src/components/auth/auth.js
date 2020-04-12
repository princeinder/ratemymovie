import React from 'react';
import { signupUser,loginUser,isUserAuthenicated} from "../../actions/auth";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 class Auth extends React.Component{

  constructor(props){
    super(props);
    this.onChangeInput=this.onChangeInput.bind(this);
    this.onSubmitSignup=this.onSubmitSignup.bind(this);
    this.onSubmitLogin=this.onSubmitLogin.bind(this);
    this.state={
      username:'',
      email:'',
      uemail:'',
      password:'',
      cpasword:''
    }
  }
componentWillMount(){
  this.props.isUserAuthenicated();
}

componentWillReceiveProps(nextProps){
  console.log(nextProps);
}
  onChangeInput(event){
    this.setState({[event.target.name]:event.target.value})
  }

  onSubmitLogin(e){
    e.preventDefault();
    const logindata={uemail:this.state.uemail,password:this.state.password};
    this.props.loginUser(logindata);
  }

  onSubmitSignup(e){
    e.preventDefault();
    const signupdata={username:this.state.username,email:this.state.email,password:this.state.password};

    this.props.signupUser(signupdata);
  }

render(){

    return (
      <div>
        <div class="overlay">
    <div className="login-wrapper" id="login-content">
      <div className="login-content">
        <a href="#" className="close">
          x
        </a>
        <h3>Login</h3>
        <form method="post" action="#" onSubmit={this.onSubmitLogin}>
          <div className="row">
            <label htmlFor="username">
              Username/Email:
              <input
                type="text"
                name="uemail"
                onChange={this.onChangeInput}
                id="username"
                placeholder="Enter Username or Email"
               // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                required="required"
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="password">
              Password:
              <input
              onChange={this.onChangeInput}
                type="password"
                name="password"
                id="password"
                placeholder="******"
               // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                required="required"
              />
            </label>
          </div>
          <div className="row">
            <div className="remember">
              <div>
                <input
                
                  type="checkbox"
                  name="remember"
                  defaultValue="Remember me"
                />
                <span>Remember me</span>
              </div>
              <a href="#">Forget password ?</a>
            </div>
          </div>
          <div className="row">
            <button type="submit">Login</button>
          </div>
          {this.props.error?
          <div className="row">
            <span style={{color:'red'}} className="errMsg">{this.props.error}</span>
          </div>:<div/>}
        </form>
        <div className="row">
          <p>Or via social</p>
          <div className="social-btn-2">
            <a className="fb" href="#">
              <i className="ion-social-facebook" />
              Facebook
            </a>
            <a className="tw" href="#">
              <i className="ion-social-twitter" />
              twitter
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="overlay">
     <div className="login-wrapper" id="signup-content">
     <div className="login-content">
       <a href="#" className="close">
         x
       </a>
       <h3>sign up</h3>
       <form method="post"   onSubmit={this.onSubmitSignup}>
         <div className="row">
           <label htmlFor="username-2">
             Username:
             <input
             onChange={this.onChangeInput}
               type="text"
               name="username"
               id="username-2"
               placeholder="Enter Username"
               required="required"
             />
           </label>
         </div>
         <div className="row">
           <label htmlFor="email-2">
             your email:
             <input
             onChange={this.onChangeInput}
               type="email"
               name="email"
               id="email-2"
               placeholder="Enter Email"
               required="required"
             />
           </label>
         </div>
         <div className="row">
           <label htmlFor="password-2">
             Password:
             <input
             onChange={this.onChangeInput}
               type="password"
               name="password"
               id="password-2"
               placeholder="Enter Password"
              required="required"
             />
           </label>
         </div>
      
         <div className="row">
           <button type="submit">sign up</button>
         </div>
         {this.props.error?
          <div className="row">
            <span style={{color:'red'}} className="errMsg">{this.props.error}</span>
          </div>:<div/>}
       </form>
     </div>
   </div>
   </div></div>
) 
}
}



Auth.propTypes = {
  signupUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  isUserAuthenicated:PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
     loading: state.auth.loading,
     error: state.auth.error,
     user: state.auth.user,
     isAuthenticated:state.auth.isAuthenticated,
     currentuser:state.auth.currentuser
});

export default connect(mapStateToProps, { signupUser,loginUser,isUserAuthenicated })(Auth);
