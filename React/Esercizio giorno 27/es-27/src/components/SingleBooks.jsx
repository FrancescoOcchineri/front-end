import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class SingleBooks extends Component {
    state = {
        selected: false
    }
    
  render() {
    return (
        <Card style={{ width: '18rem' }} className={this.state.selected === true ? 'selected-book' : ''}>
        <Card.Img className='h-100' variant='top' src={this.props.books.img} onClick={() => this.setState((prevState) => ({selected: !prevState.selected}))} />
        <Card.Body>
          <Card.Title>{this.props.books.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

