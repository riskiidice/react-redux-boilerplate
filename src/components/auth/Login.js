import React, { Component } from "react";

import { connect } from 'react-redux';

import { signIn } from '../../store/actions/authActions';

 class Login extends Component {
   state = {
     email: "",
     password: ""
   };

   handleSubmit = e => {
     e.preventDefault();
     this.props.signIn(this.state);
   }
   handleChange = e => {
     this.setState({
       [e.target.id] : e.target.value
     });
   }
   componentWillReceiveProps(nextProps){
    if (nextProps.auth.isAuthenticated) {
        window.location.href = "/documents/create";
    }
   }
   componentDidMount(){
     if(this.props.auth.isAuthenticated){
        window.location.href = "/documents/create";
     }
   }
   render(){
     const { authError } = this.props;

      return (
          <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html"><b>CND</b>Docs</a>
            </div>
            
            <div className="login-box-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <div className="text-red text-center">
                   {authError ? <p>{authError}</p>: null}
               </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group has-feedback">
                  <input id="email" type="text" className="form-control" placeholder="รหัสพนักงาน" onChange={this.handleChange} />
                  <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                  <input id="password" type="password" className="form-control" placeholder="รหัสผ่าน" onChange={this.handleChange} />
                  <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className="row" style={{ width:"100%", margin:"auto"}}>
                    <button type="submit" className="btn btn-success btn-block btn-flat">Login</button>
                </div>
               
              </form>
            </div>
          </div>
      )
   }
}

const mapStateToProps = (state) =>{
  return {
    auth: state.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
