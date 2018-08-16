import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Lifecycle Methods (to handle component just got rendered and updated):
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    // Helper Methods:
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};



/* Explaining Step 2: Create a HOC file and add the HOC scaffold:

// Imagine we are in CommentBox.js
import requireAuth from 'components/requireAuth';

class CommentBox {

}

export default requireAuth(CommentBox);


// Imagine we are in App.js
import CommentBox from 'components/CommentBox';

*/
