import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Container } from 'react-bootstrap';
import IArticle from '../interfaces/IArticle';

export default function DetailComponent() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [article, setArticle] = useState<IArticle>()

    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v4/articles/' + id)
            .then(response => setArticle(response.data))
    }, [id])

    return (
        <Container className='d-flex justify-content-center mt-3'>
            <Card style={{ width: '55rem' }}>
                <Card.Img variant="top" src={article ? article.image_url : 'loading'} />
                <Card.Body>
                    <Card.Title className='fw-bold fs-3'>{article ? article.title : 'loading'}</Card.Title>
                    <Card.Text>
                        {article ? article.summary : 'loading'}
                    </Card.Text>
                    <div className='d-flex justify-content-end text-muted'>
                        <Card.Text>
                            {article ? article.published_at : 'loading'}
                        </Card.Text>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" onClick={() => navigate('/')}>Back</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
