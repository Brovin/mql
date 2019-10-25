import React from 'react';
import styles from './app.module.css';
import Navbar from '../navbar';
import {Route, withRouter} from 'react-router-dom';
import ProfileContainer from '../../containers/profile-container';
import UsersContainer from '../../containers/users-container';
import HeaderContainer from "../../containers/header-container";
import Login from "../login";
import DialogsContainer from "../../containers/dialogs-container";
import {connect} from "react-redux";
import * as appActions from "../../actions/app-actions";
import {compose} from "redux";
import Preloader from "../common/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={styles.app}>
        <HeaderContainer />
        <Navbar/>
        <div>
          <Route path='/profile/:userId?' component={ProfileContainer} />
          <Route path='/users' component={UsersContainer} />
          <Route path='/login' component={Login} />
          <Route path='/dialogs' component={DialogsContainer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, appActions))(App);
