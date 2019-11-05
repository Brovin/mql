import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import * as authActions from '../../actions/auth-actions';
import {Redirect} from "react-router-dom";
import {createField, Input} from "../common/forms-controls/forms-controls";
import {required} from "../../utils/validators/validators";

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
      {props.captchaUrl && <img src={props.captchaUrl} alt="" />}
      {props.captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
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
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  };

  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, authActions)(Login);