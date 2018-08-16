import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          SIGN OUT
        </button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>
          SIGN IN
        </button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/post">POST A COMMENT</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { auth: state.auth }
}
export default connect(mapStateToProps, actions)(App);
