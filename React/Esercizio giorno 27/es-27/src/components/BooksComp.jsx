import React, { Component } from 'react'
import Fantasy from '../books/fantasy.json'
import Horror from '../books/horror.json'
import History from '../books/history.json'
import Romance from '../books/romance.json'
import Scifi from '../books/scifi.json'
import BookList from './BookList'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default class BooksComp extends Component {
    state = {
        books: [],
        searchQuery: '',
        filterBooks: []
    }

    componentDidMount() {
         this.setState({
            books: [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi]
        }
        ) 
    }

    getSearchQuery = () => {
      let filter = this.state.books.filter(book => book.title.includes(this.state.searchQuery))
      this.setState({filterBooks: filter})
    }

    render() {
      /* console.log(this.state.searchQuery) */
        return (
            <>
             <Container>
             <Row className="my-3">
      <Col lg={10}>
          <Form.Control type="text" placeholder="Search Books" onChange={(e) => this.setState({searchQuery: e.target.value})} />
      </Col>
      <Col lg={2}>
      <Button variant="secondary" onClick={this.getSearchQuery}>Search</Button>
      </Col>
    </Row>
            <h1 className='mt-5'>Books:</h1>
            <BookList books={this.state.filterBooks.length !== 0 ? this.state.filterBooks : this.state.books} />
            <p className='fs-3 my-4'>Total books: {this.state.books.length}</p>
            </Container>
          </>
    )
  }
}
