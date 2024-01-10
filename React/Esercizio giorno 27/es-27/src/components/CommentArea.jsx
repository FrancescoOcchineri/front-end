import React, { Component } from 'react'
import { CommentList } from '../components/CommentList'

export default class CommentArea extends Component {

    state = {
        comments: []
    }

    componentDidMount = () => {
        fetch('https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.asin, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU0OWMwNTgzNTAwMTg1MjJmODgiLCJpYXQiOjE3MDQ4OTYyMjQsImV4cCI6MTcwNjEwNTgyNH0.5oVKQJOa4wpU08G-kyaNo0rS8qk7Eq0YEDg8WdsC6Rc"
    }
    })
    .then(response => response.json())
    .then(json => this.setState({comments: json}))
    }

  render() {

    return (
      <>
      <CommentList comments = {this.state.comments} />
      </>
    )
  }
}
