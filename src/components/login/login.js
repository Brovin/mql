import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import * as authActions from '../../actions/auth-actions';

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

  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};

export default connect(null, authActions)(Login);