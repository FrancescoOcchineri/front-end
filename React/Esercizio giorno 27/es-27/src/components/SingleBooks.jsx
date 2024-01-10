import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

export default class SingleBooks extends Component {
    state = {
        selected: false,
        asin: []
    }

    componentDidMount() {
      this.setState({ asin: this.props.books.asin });
    }
    
  render() {
    return (
        <Card style={{ width: '18rem' }} className={this.state.selected === true ? 'selected-book' : ''}>
        <Card.Img className='h-100' variant='top' src={this.props.books.img} onClick={() => this.setState((prevState) => ({selected: !prevState.selected}))} />
        <Card.Body>
          <Card.Title>{this.props.books.title}</Card.Title>
          {this.state.selected && <CommentArea asin={this.props.books.asin} />}
        </Card.Body>
      </Card>
    )
  }
}

