import React from 'react'
import { Card } from 'react-bootstrap'

export default function MyFooter() {
  return (
    <div>
    <Card className="text-center mt-5">
    <Card.Header>F.O.</Card.Header>
    <Card.Body>
      <Card.Title>EpicBooks</Card.Title>
    </Card.Body>
    <Card.Footer className="text-muted">&copy; Copyright EpicBooks</Card.Footer>
  </Card>
  </div>
  )
}
