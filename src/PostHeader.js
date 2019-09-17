import React, { Component } from 'react';

class PostHeader extends Component {
  render() {
    return (
      <div className="post-header">
        <img
          src={this.props.infoheader.image}
          alt={this.props.infoheader.name}
        />
        <div className="post-header-info">
          <p className="post-header-nome">{this.props.infoheader.name}</p>
          <p className="post-header-tempo">{this.props.infoheader.time}</p>
        </div>
      </div>
    );
  }
}

export default PostHeader;
