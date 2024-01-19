import React from 'react'
import { Container, ListGroup, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { removeFavourites } from '../action/favourites'

export default function Favourites({ data }) {

    const favouritesList = useSelector(state => state.favourites)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (favouritesList.length === 0) {
        return (
            <Container>
                <h1 className="display-3 text-center mt-3">My Favourites</h1>
                <p className='mt-3'>La lista dei preferiti è vuota.</p>
                <div className="d-flex justify-content-end mt-2">
                    <Button variant="primary" className="py-1 mt-2" onClick={() => navigate('/')}>Back</Button>
                </div>
            </Container>
        );
    }


    return (
        <>
            <Container>
                <h1 className="display-3 text-center mt-3">My Favourites</h1>
                <ListGroup className='mt-3 list-group'>
                    {favouritesList.map((n, index) => (
                        <ListGroup.Item key={index._id}>
                            <Link to={`/${n.company_name}`}>{n.company_name}</Link>
                            <div className='d-flex justify-content-end'>
                                <Button variant="danger" className="btn-sm" onClick={() => dispatch(removeFavourites(n))}>
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <div className="d-flex justify-content-end mt-2">
                    <Button
                        variant="primary"
                        className="py-1"
                        onClick={() => navigate('/')}
                    >Back</Button>
                </div>
            </Container>
        </>
    )
}
