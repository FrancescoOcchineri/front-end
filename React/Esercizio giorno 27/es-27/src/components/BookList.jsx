import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBooks from './SingleBooks'

export default function BookList({books}) {
  return (
    <Row xs={12} md={4} className='g-4'>
    {books.map((books,index) => (
      <Col key={index}>
        <SingleBooks books={books} />
      </Col>
))}
  </Row>
  )
}
