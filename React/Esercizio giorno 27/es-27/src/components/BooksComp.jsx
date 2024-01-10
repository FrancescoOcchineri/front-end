import React, { Component } from 'react'
import Fantasy from '../books/fantasy.json'
import Horror from '../books/horror.json'
import History from '../books/history.json'
import Romance from '../books/romance.json'
import Scifi from '../books/scifi.json'
import { Container, Card, Row, Col } from 'react-bootstrap'

export default class BooksComp extends Component {
    state = {
        books: []
    }

    componentDidMount() {
         this.setState({
            books: [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi]
        }
        ) 
    }

    render() {
        return (
            <Container>
            <h1 className='my-5'>Books:</h1>
            <Row xs={12} md={4} className='g-4'>
              {this.state.books.map((b,index) => (
                <Col key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='h-100' variant='top' src={b.img} />
                  <Card.Body>
                    <Card.Title>{b.title}</Card.Title>
                  </Card.Body>
                </Card>
                </Col>
    ))}
            </Row>
            <p className='fs-3 my-4'>Total books: {this.state.books.length}</p>
          </Container>
    )
  }
}
