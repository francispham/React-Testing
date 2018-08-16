import React, { Component } from 'react';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }

  return ComposedComponent
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
