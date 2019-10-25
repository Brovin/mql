import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import * as authActions from '../../actions/auth-actions';
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} type={"password"} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />Remember Me
      </div>
      <div>
        {props.error && <span>{props.error}</span>}
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  };

  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, authActions)(Login);