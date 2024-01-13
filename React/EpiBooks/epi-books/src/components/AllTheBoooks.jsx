import React, { Component } from 'react'
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import { Card, CardText, Col, Row } from 'react-bootstrap'

export default class AllTheBoooks extends Component {

    state = {
        books: []
    }



    componentDidMount() {
        const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi]

        this.setState({ books: allBooks })
    }

    render() {
        console.log(this.state.books)
        return (
            <>
                <Row className='g-4 mt-4'>
                    {this.state.books.map((b, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={b.img} />
                                <Card.Body>
                                    <Card.Title>{b.title}</Card.Title>
                                    <Card.Text className='badge rounded-pill text-bg-dark mb-2'>
                                        {b.category}
                                    </Card.Text>
                                    <CardText>
                                        {b.price}€
                                    </CardText>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}
