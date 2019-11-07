import React from 'react';
import styles from './app.module.css';
import Navbar from '../navbar';
import {Route, withRouter} from 'react-router-dom';
import ProfileContainer from '../../containers/profile-container';
import HeaderContainer from "../../containers/header-container";
import Login from "../login";
import {connect} from "react-redux";
import * as appActions from "../../actions/app-actions";
import {compose} from "redux";
import Preloader from "../common/preloader";
import {withSuspense} from "../../hoc/withSuspense";

const UsersContainer = React.lazy(() => import('../../containers/users-container'));
const DialogsContainer = React.lazy(() => import('../../containers/dialogs-container'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className={styles.app}>
        <HeaderContainer/>
        <Navbar/>
        <div>
          <Route path='/profile/:userId?'
                 component={ProfileContainer}
          />
          <Route path='/users'
                 component={withSuspense(UsersContainer)}
          />
          <Route
            path='/login'
            component={Login}
          />
          <Route
            path='/dialogs'
            component={withSuspense(DialogsContainer)}
          />
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
