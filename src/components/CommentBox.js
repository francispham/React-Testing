import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

/* Are moved to requireAuth-the HOC
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
*/

  handleChange = event => {
    this.setState({ comment: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
      </form>
      <button className="fetch-comments" onClick={this.props.fetchComments}>
        Fetch Comments
      </button>
    </div>
    )
  }
}

/* Are moved to requireAuth-the HOC
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
*/

// After mapStateToProps is moved to requireAuth:
export default connect(null, actions)(CommentBox);
