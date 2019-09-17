import React, { Component } from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';

class Post extends Component {
  render() {
    return (
      <section className="post">
        <PostHeader infoheader={this.props.post} />
        <PostBody infobody={this.props.post} />
      </section>
    );
  }
}

export default Post;
