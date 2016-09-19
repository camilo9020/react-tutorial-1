import React, { Component } from 'react';
import Client from './Client';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.loadCommentsFromServer();
  }

  loadCommentsFromServer() {
    Client.search().then((data) => (
      this.setState({
        comments: data,
      })
    ));
  }

  handleCommentSubmit(comment) {
    let comments = this.state.comments;
    let newComments = comments.concat([comment]);
    this.setState({comments: newComments});
    fetch('api/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: comment.author,
        text: comment.text,
      })
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.comments} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

export default CommentBox;
