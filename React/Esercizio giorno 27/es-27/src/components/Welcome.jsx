import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function Welcome() {
  return (
    <>
    <div>
        <Container fluid className='bg-dark text-white p-4 text-center'>
        <h1>EpicShops</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus eaque ut corrupti! Non impedit, facilis iusto soluta possimus fugit veniam.</p>
        <Button variant="primary">Learn More</Button>
        </Container>
    </div>
    </>
  )
}
