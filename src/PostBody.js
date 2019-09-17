import React, { Component } from 'react';

class PostBody extends Component {
  render() {
    return <div className="post-body">{this.props.infobody.post}</div>;
  }
}

export default PostBody;
